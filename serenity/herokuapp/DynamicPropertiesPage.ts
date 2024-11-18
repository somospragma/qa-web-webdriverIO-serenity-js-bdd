import {Navigate, By, PageElement, Text} from '@serenity-js/web';
import {Task, Question} from '@serenity-js/core';



// Localizador para el elemento basado en el texto
export class DynamicPropertiesPage {

    static dynamicTextByText = () =>
        PageElement.located(By.xpath("//*[contains(text(),'This text has random Id')]"))
            .describedAs('dynamic text with random ID by text');

// Otro forma de Localizador para el elemento basado en el texto
    static dynamicTextByTextOptional = () =>
        PageElement.located(By.xpath("//div/p[1]")).describedAs('dynamic text with random ID by ID prefix');

    // Tarea para navegar a la página de propiedades dinámicas
    static navigateToDynamicPropertiesPage= async () =>
        Task.where(`#actor navigates to the dynamic properties page`,
            Navigate.to('https://demoqa.com/dynamic-properties')
        );


    // Pregunta para obtener el texto de un elemento basado en el texto
    static getTextByTextLocator = () =>
        Question.about<string>(`the text of the element located by text`, actor =>
            Text.of(DynamicPropertiesPage.dynamicTextByText()).answeredBy(actor),
        );

    // Pregunta para obtener el texto de un elemento basado en el ID dinámico
    static getTextByDynamicIdLocator = () =>
        Question.about<string>(`the text of the element located by ID prefix`, actor =>
            Text.of(DynamicPropertiesPage.dynamicTextByTextOptional()).answeredBy(actor),
        );
}
