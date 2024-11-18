import {PageElement, By, Enter, Click, Text, Navigate} from '@serenity-js/web';
import {Task} from "@serenity-js/core";

export class LoginPage {

    // Localizadores de los elementos en la página de login
    static #usernameField = PageElement.located(By.id('username')).describedAs('Username field');
    static #passwordField = PageElement.located(By.id('password')).describedAs('Password field');
    static #loginButton = PageElement.located(By.css('button[type="submit"]')).describedAs('Login button');
    static #errorMessage = PageElement.located(By.id('flash')).describedAs('Error message');
    static #succesMessage = PageElement.located(By.id('flash')).describedAs('Succes Menssage');

    // Navegar a la página de login
    static navigateToLoginPage= async () =>
        Task.where(`#actor navigates to the login page`,
            Navigate.to('https://the-internet.herokuapp.com/login')
        );

    // Ingresar las credenciales de login
    static loginWithCredentials = (username: string, password: string) =>
        Task.where(`#actor logs in with username "${username}" and password "${password}"`,
            Enter.theValue(username).into(this.#usernameField),
            Enter.theValue(password).into(this.#passwordField),
            Click.on(this.#loginButton),
        );

    // Obtener el mensaje de error en caso de fallo
    static errorMessage = () =>
        Text.of(this.#errorMessage);

    // Obtener el título de la página (usado en el escenario de éxito)
    static succesMessage = () =>
        Text.of(this.#succesMessage);
}
