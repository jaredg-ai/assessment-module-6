import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Upper left square can add an X', async () => {
    let user = await (await driver).findElement(By.id('cell-0'))
    await user.click()
});

test('Upper right square can add an "X"', async () => {
    let user = await (await driver).findElement(By.id('cell-2'))
    await user.click()
});

test('Lower right square can add an "X"', async () => {
    let user = await (await driver).findElement(By.id('cell-8'))
    await user.click()
});