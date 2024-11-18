import { Given, When, Then } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Ensure, equals, not } from '@serenity-js/assertions';
import {Navigate} from '@serenity-js/web';
import { DynamicContentPage } from '../../serenity/herokuapp/DynamicContentPage.ts';


let initialContent: string[];

Given('{actor} I am on the dynamic content page', async (actor: Actor) => {
    await actor.attemptsTo(
        await DynamicContentPage.url()  // Abre la página de login
    );
});

When('{pronoun} I capture the initial content', async (actor: Actor) => {
    // Captura el texto de los elementos dinámicos en `initialContent`
    const elements = await actor.answer(DynamicContentPage.dynamicText());
    initialContent = await Promise.all(elements.map(element => element.text()));  // Extrae texto de cada elemento
});

When('{pronoun} I reload the page', async (actor: Actor) => {
    await actor.attemptsTo(
        Navigate.reloadPage()
    );
});

Then('{pronoun} I should see different content after reload', async (actor: Actor) => {
    // Captura el contenido nuevamente tras recargar la página
    const elementsAfterReload = await actor.answer(DynamicContentPage.dynamicText());
    const newContent = await Promise.all(elementsAfterReload.map(element => element.text()));

    // Verifica que el contenido inicial y el nuevo sean diferentes
    for (let i = 0; i < initialContent.length; i++) {
        await actor.attemptsTo(
            Ensure.that(newContent[i], not(equals(initialContent[i])))
        );
    }
});
