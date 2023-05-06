const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
// Se obtiene  la ruta absoluta del archivo properties.json
const propertiesPath = path.join(__dirname, 'properties.json');
// Lee y analiza el archivo properties.json
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));

Given('I navigate to my page {string}', async function (page) {
    let url = properties.baseUrl + page;
    return await this.driver.url(url);
});

When('I navigate to {string}', async function (page) {
    let url = properties.baseUrl + page;
    return await this.driver.url(url);
});

When('I put identification {string}', async function (user) {
    let email = properties[user].email;
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I put password {string}', async function (user) {
    let password = properties[user].password;
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});


When('I click button {string}', async function (buttonName) {
    const button = properties.buttons[buttonName];
    if (button) {
        let element = await this.driver.$(button);
        return await element.click();
    } else {
        throw new Error(`Button "${buttonName}" not found in properties.json`);
    }
});

When('I send Enter', async function () {
    return await this.driver.keys('Enter');
});

When('I click the post title is {string}', async function (expectedTitle) {
    //let element = await this.driver.$x("//h3[contains(@class, 'gh-content-entry-title') and contains(., '${expectedTitle}')]");
    const selector = properties.elements['lista-post-title'];
    let element = await this.driver.$(selector);
    assert(element, 'Element not found');
    return await element.click();    
});

When('I Click Post Update Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title-input'];
    const element = await this.driver.$(selector);
    return await element.setValue(expectedTitle);
    
});

Then('I see the post title is {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.strictEqual(actualTitle, expectedTitle, `Expected post title to be "${expectedTitle}", but found "${actualTitle}"`);
});

Then('I Cant Found Post Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['post-title-input'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.notStrictEqual(actualTitle, expectedTitle); 
});

Then('I Find Post Tittle {string}', async function (expectedTitle) {
    const selector = properties.elements['article-title'];
    const element = await this.driver.$(selector);
    const actualTitle = await element.getText();
    assert.strictEqual(actualTitle, expectedTitle, `Expected post title to be "${expectedTitle}", but found "${actualTitle}"`); 
});

