import main_page from "./../pages/GitHub_main_page.js";
import sign_up from "./../pages/GitHyb_Sign_up_pages.js";
import chois_page from "../pages/GitHub_chois_page.js";
import subscribe_page from "../pages/GitHub_subscribe_page.js";
import search_page from "../pages/GitHub_search_page.js";
import pricing_page from "../pages/GitHub_pricing_page.js";

describe.skip("Home work", () => {
    it('Home work 1', async () => {
        await browser.url('https://webdriver.io/');

        const button_api = await $('//a[@class="navbar__item navbar__link" and @href="/docs/api"]');
        await button_api.click()
        await browser.pause(2000)

        const url = await browser.getUrl()
        console.log("URL " + url)
        await browser.pause(2000)

        let Introduction = await $("//header/h1")
        console.log(Introduction.getText())
        await browser.pause(2000)

        let webdriver_url = await $('//a[@href="/docs/api/webdriver"]')
        console.log("Webdriver url: " + await webdriver_url.getAttribute("href"))
        await browser.pause(2000)

        let search_fild = await $('//span[@class="DocSearch-Button-Placeholder"]')
        search_fild.click()
        await browser.pause(2000)

        let search_fild_2 = await $('//input[@class="DocSearch-Input" and @placeholder="Search docs"]')
        search_fild_2.setValue("all is done")
        await browser.pause(2000)

        let but_X = await $('//button[@type="reset" and @title="Clear the query"]')
        but_X.click()
        
    });

    it('Home work 2', async () => {
        await browser.url('https://webdriver.io/');

        const button_api = await $('//a[@class="navbar__item navbar__link" and @href="/docs/api"]');
        await button_api.click()
        await browser.pause(2000)

        const linkBlog = await $('//a[@class="footer__link-item" and @href="/blog"]')
        await linkBlog.scrollIntoView()

        await browser.waitUntil(async () =>{
            return $('//a[@class="footer__link-item" and @href="/blog"]').isDisplayed();
        },30000,"Посилання blog неактивна")

        const getVisibl = await $('//a[@class="pagination-nav__link pagination-nav__link--next" and @href="/docs/api/protocols"]')
        let isVisibl = await getVisibl.isEnabled()
        console.log('Кнопка Get Started активна?: ' + isVisibl)

        let isClicbl = await getVisibl.isClickable()
        console.log('Кнопка Get Started клікабельна?: ' + isClicbl)
        
        const getHTML = await $('//a[@class="pagination-nav__link pagination-nav__link--next" and @href="/docs/api/protocols"]').getHTML()
        console.log("HTML: " + getHTML)

        await getVisibl.click()

        await browser.waitUntil(async () =>{
            return $('//h2[@id="webdriver-protocol"]').isDisplayed();
        },30000,"Кнопка неактивна")
    });
})

describe.skip("Home work 3", () => {
    it('Вхід на Github з чистими полями email та password', async () => {
        await browser.url("https://github.com/");

        const sign_in_but = $('//a[@href="/login"]')
        await sign_in_but.click()

        const sign_in_green_but = $('//input[@type="submit"]')
        await sign_in_green_but.click()

        const error_mesage = $('//div[@role="alert"]')
        const error_text = 'Incorrect username or password.'
        await expect(error_mesage).toHaveText(error_text)

    })

    it('Вхід на Github з чистим полем email', async () => {
        await browser.url("https://github.com/");

        const sign_in_but = $('//a[@href="/login"]')
        await sign_in_but.click()

        const pas_field = $('//input[@type="password"]')
        await pas_field.setValue(123456)

        const sign_in_green_but = $('//input[@type="submit"]')
        await sign_in_green_but.click()

        const error_mesage = $('//div[@role="alert"]')
        const error_text = 'Incorrect username or password.'
        await expect(error_mesage).toHaveText(error_text)
    })

    it('Вхід на Github з чистим полем password', async () => {
        await browser.url("https://github.com/");

        const sign_in_but = $('//a[@href="/login"]')
        await sign_in_but.click()

        const email_field = $('//input[@type="text" and @name="login"]')
        await email_field.setValue("qwerty190518@gmail.com")

        const sign_in_green_but = $('//input[@type="submit"]')
        await sign_in_green_but.click()

        const error_mesage = $('//div[@role="alert"]')
        const error_text = 'Incorrect username or password.'
        await expect(error_mesage).toHaveText(error_text)

    })

    it('Вхід на Github з незареєстрованого акаунту', async () => {
        await browser.url("https://github.com/");

        const sign_in_but = $('//a[@href="/login"]')
        await sign_in_but.click()

        const email_field = $('//input[@type="text" and @name="login"]')
        await email_field.setValue("qwerty190518@gmail.com")

        const pas_field = $('//input[@type="password"]')
        await pas_field.setValue(123456)

        const sign_in_green_but = $('//input[@type="submit"]')
        await sign_in_green_but.click()

        const error_mesage = $('//div[@role="alert"]')
        const error_text = 'Incorrect username or password.'
        await expect(error_mesage).toHaveText(error_text)

    })

    it('Вхід на Github з зареєстрованого акаунту', async () => {
        await browser.url("https://github.com/");

        const sign_in_but = $('//a[@href="/login"]')
        await sign_in_but.click()

        const email_field = $('//input[@type="text" and @name="login"]')
        await email_field.setValue("roribed534@utwoko.com")

        const pas_field = $('//input[@type="password"]')
        await pas_field.setValue("cF1K8Vfzrr4dbapB")

        const sign_in_green_but = $('//input[@type="submit"]')
        await sign_in_green_but.click()

    })
})

describe ("Final Home Work", () => {
    it('Регістрація', async () => {
        await browser.url('https://github.com/')

        await main_page.sign_up_click()
        await sign_up.exept_mes()
        await sign_up.email_input()
        await sign_up.email_but_click()
        await sign_up.password_input()
        await sign_up.pas_but_click()
        await sign_up.login_input()
        await sign_up.log_but_click()
        await sign_up.y_input()
        await sign_up.y_but_click()

        await browser.pause(2000)
    })

    it('Безкоштовна пробна версія', async () => {
        await browser.url('https://github.com/')

        await main_page.text_existing()
        await main_page.but_enterprice_click()
        await chois_page.text_plan()
        await chois_page.enterprise_click()
    })

    it('Підписка', async () => {
        await browser.url('https://github.com/')

        await main_page.but_subscribe_click()
        await subscribe_page.test_url()
        await subscribe_page.email_input()
        await subscribe_page.country()
        await subscribe_page.checkbox_click()
        await subscribe_page.but_subscribe_click()
        await subscribe_page.test_thanks()
    })

    it('Пошук', async () => {
        await browser.url('https://github.com/')

        await main_page.search()

        await search_page.fiend_word()

    })

    it('Тарифи', async () => {
        await browser.url('https://github.com/')

        await main_page.pricing_click()
        await pricing_page.text_displayed()
        await pricing_page.compare_click()
    })
})