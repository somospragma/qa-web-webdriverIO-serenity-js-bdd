import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { type Actor } from '@serenity-js/core';
import { LoginPage } from '../../serenity/herokuapp/LoginPage.ts';  // Ruta a tu página de login

// Step Definitions
setDefaultTimeout(200000);
Given('{actor} I am on the login page',  async  (actor: Actor) =>{
    await actor.attemptsTo(
        await LoginPage.navigateToLoginPage()  // Abre la página de login
    );
});

When('{pronoun} I log in with valid username {string} and password {string}', async (actor: Actor, username: string, password: string) => {
    await actor.attemptsTo(
        LoginPage.loginWithCredentials(username, password)  // Acción de login con los datos proporcionados
    );
});
When('{pronoun} I log in with invalid username {string} and password {string}', async (actor: Actor, username: string, password: string) => {
    await actor.attemptsTo(
        LoginPage.loginWithCredentials(username, password)  // Acción de login con los datos proporcionados
    );
});

Then('{pronoun} I should see the {string} page', async (actor: Actor, expectedSuccesMessage: string) => {
    const actualMessage = await LoginPage.succesMessage();  // Captura el mensaje exitoso completo
    const cleanedMessage = actualMessage.replace(/\s*×$/, '').trim();  // Elimina la "x" y espacios adicionales
    await actor.attemptsTo(
        Ensure.that(cleanedMessage, equals(expectedSuccesMessage.trim()))  // Compara con el mensaje esperado
    );
});

Then('{pronoun} I should see an error message {string}', async (actor: Actor, expectedErrorMessage: string) => {
    await actor.attemptsTo(
        Ensure.that(LoginPage.errorMessage().trim().replace(/\s+/g, ' '),
            equals(expectedErrorMessage) // Limpia también espacios extra y cualquier carácter especial en el mensaje esperado
            //equals(expectedErrorMessage.trim().replace(/\s+/g, ' '))  // Verifica el mensaje de error

        )
    );

});
