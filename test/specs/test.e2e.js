import { browser,expect } from '@wdio/globals'

describe("Webdriverio main page", () => {
    xit('should have correct title', async () => {//Назва тесту
        await browser.url('https://webdriver.io/');//Логічно

        const title = await browser.getTitle()//Заголовок вкладки
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')// Перевірка заголовку
    });

    xit('should show addValue command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")// пошук єлементів по Xpath або CSS селектору
        await input.addValue("hello")// ДОДАТИ значення
        await browser.pause(2000)// Пауза

        await input.addValue(123)// ДОДАТИ значення
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")//Перевірка значення
    })

    xit('should show setValue command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")
        await input.setValue("world")// ВСТАВИТИ значення (видаляється раніше вставлене значення)
        await browser.pause(2000)
        await input.setValue("loh12")// ВСТАВИТИ значення (видаляється раніше вставлене значення)

        console.log(await input.getValue())
        await expect(input).toHaveValue("loh12")//Перевірка значення
    })

    xit('should show click command', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let loginButton = await $(".radius")
        await browser.pause(2000)
        await loginButton.click()//Логічно
        await browser.pause(4000)

        let inputUsername = await $('#username')
        await inputUsername.addValue('MANDER')
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    })

    xit('should show getLocation command', async () => {
        await browser.url(`https://dou.ua`);

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()// Отримати положення елементу
        console.log("Кординати " + location.x + " " + location.y)//Отримати або х або у

        let Xlocation = await inputSearch.getLocation("x")
        console.log("Кординати x " + Xlocation)
    })
    xit('should show getText command', async () => {
        await browser.url(`https://webdriver.io`);

        let subtitle = await $('.hero__subtitle')
        console.log('Текст ' + await subtitle.getText())// Отримати текст
    })

    xit('should show getAtribute command', async () => {
        await browser.url(`https://webdriver.io`);

        let subtitle = await $('//a[@href="/docs/gettingstarted" and @class="button button--outline button--secondary button--lg getStarted_Sjon"]')
        console.log('Атрибут href: ' + await subtitle.getAttribute("href"))// Отримати атребут
    })

    xit('should show if an element is enabled', async () => {
        await browser.url(`https://webdriver.io`);

        const getStartBut = await $('//a[@href="/docs/gettingstarted" and @class="button button--outline button--secondary button--lg getStarted_Sjon"]')
        let isEnabled = await getStartBut.isEnabled()// Перевірка чи активний елемент
        console.log('Кнопка Get Started активна?: ' + isEnabled)
    })

    xit('should show if an element is focused', async () => {
        await browser.url(`https://webdriver.io`);

        const getStarttedButton = await $('//a[@href="/docs/gettingstarted" and @class="button button--outline button--secondary button--lg getStarted_Sjon"]')
        let isFocused = await getStarttedButton.isFocused()// Перевірка фокусу(виділення)
        console.log('Фокус (виділення) кнопки Get Started до кліку: ' + isFocused)
        await browser.pause(2000)
        await getStarttedButton.click()
        console.log('Фокус (виділення) кнопки Get Started після кліку: ' + isFocused)
        await browser.pause(2000)
    })

    xit('should show movement to element action', async () => {
        await browser.url(`https://webdriver.io`);

        const getLogoFooter = await $('//a[@href="/community/support" and @class="footer__link-item"]')
        await browser.pause(2000)
        await getLogoFooter.scrollIntoView()// Перемішення до елементу
        await browser.pause(2000)
    })

    xit('should show movement to element action', async () => {
        await browser.url(`https://webdriver.io`);

        const getLinkHelp = await $('//a[@href="/community/support" and @class="footer__link-item"]')
        await browser.pause(2000)
        await getLinkHelp.scrollIntoView()// Перемішення до елементу
        await browser.pause(2000)
        await getLinkHelp.saveScreenshot('linkScreenshot.png')//Створення скріншоту елементу з назвою linkScreenshot
    })

    xit('should switch to another window', async () => {
        await browser.url(`https://webdriver.io`);

        await browser.newWindow('https://google.com')//Створення нового вікна Google
        await browser.pause(2000)

        await browser.switchWindow(`https://webdriver.io`)// перемикання на вікно WebdriverIO
        await browser.pause(2000)
    })

    xit('should get html for certain elements', async () => {
        await browser.url(`https://webdriver.io`);

        const outerHTML = await $('.dropdown__menu').getHTML()//Всі теги в ul .dropdown__menu (включно)
        console.log("Вихідний HTML: " + outerHTML)

        const interHTML = await $('.dropdown__menu').getHTML(false)//Всі теги в ul .dropdown__menu (без ul)
        console.log("Вхідний HTML: " + interHTML)
    })

    xit('should show waiyUntil command', async () => {
        await browser.url(`https://webdriver.io`);

        await browser.waitUntil(async () =>{
            return $('//a[@class="button button--outline button--secondary button--lg getStarted_Sjon" and @href="/docs/gettingstarted"]').isDisplayed();
        },30000,"Кнопка неактивна")// Чекати (WaitDriver) значення isDisplayed - Видно, isDisplayedInViewPort - Видно на НАШЕМУ єкрані, isClickable - Поки елемент нестане клікабельним
    })
})