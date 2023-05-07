const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'post_properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));

Then('I click on the first conversation', async function () {
    let element = await this.driver.$('img.x1lliihq.x193iq5w.x1us19tq.xl1xv1r');
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('.xat24cr');
    return await element.click();
});

Then('I send the message', async function () {
    return await this.driver.keys('Enter');
});