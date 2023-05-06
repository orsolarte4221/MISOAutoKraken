const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));


When('I enter email {string}', async function (user) {
    let email = properties[user].email;
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});

When('I enter password {string}', async function (user) {
    let password = properties[user].password;
    let element = await this.driver.$('#pass');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#loginbutton');
    return await element.click();
})

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