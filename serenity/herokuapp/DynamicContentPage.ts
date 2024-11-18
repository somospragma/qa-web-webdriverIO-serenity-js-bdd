import {By, Navigate, PageElements} from '@serenity-js/web';
import {Task} from "@serenity-js/core";

export class DynamicContentPage {

    static url= async () =>
        Task.where(`#actor navigates to the login page`,
            Navigate.to('https://the-internet.herokuapp.com/dynamic_content')
        );

    // Obtiene todos los elementos de texto dinámicos

    static dynamicText = () =>
        PageElements.located(By.css('.large-10')).describedAs('dynamic text elements');
}
