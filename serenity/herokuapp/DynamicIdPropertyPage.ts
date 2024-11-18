import { PageElement, By, Attribute } from '@serenity-js/web';

export class DynamicIdPropertyPage {
    // Definimos el elemento de la página que queremos capturar
    public static dynamicTextElement = () =>
        PageElement.located(By.xpath("//div/p[contains(text(), 'This text has random Id')]"))
        .describedAs('element with random ID');

    // Metodo para obtener el ID del elemento
    public static async getItemId() {
        return Attribute.called('id').of(DynamicIdPropertyPage.dynamicTextElement());
    }
    // Metodo para obtener el ID del elemento
    public static async getIdItem() {
        const id = await Attribute.called('id').of(DynamicIdPropertyPage.dynamicTextElement());
        //console.log(`El ID dinámico es: ${id}`); // Imprimir el ID real en la consola
        return id;
    }

}
export class IdDynamicPropertyPages{
    // Localizador para el elemento basado en el ID (ejemplo alternativo)
    static dynamicTextElement = PageElement.located(By.xpath("//div/p[contains(text(), 'This text has random Id')]"))
        .describedAs('element with random ID');

    // Metodo para capturar el ID dinámico del elemento
    static async getDynamicId(){
        const id = await this.dynamicTextElement.attribute('id'); // Usa .attribute() para obtener el atributo 'id'
        console.log(`El ID dinámico es: `, IdDynamicPropertyPages.dynamicTextElement);
        return id;
    }
}