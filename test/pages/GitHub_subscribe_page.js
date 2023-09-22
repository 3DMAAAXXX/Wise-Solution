class subscribe_page {

    get text_subscribe () {return $('//h1[@id="hero-section-brand-heading"]')}
    get email_field () {return $('//input[@type="email"]')}
    get select_country () {return $('//select[@name="country"]')}
    get select_country_UA () {return $('//option[@value="UA"]')}
    get checkbox () {return $('//input[@type="checkbox"]')}
    get but_subscribe () {return $('//button[@type="submit"]')}
    get thanks () {return $('//h1[@class="Primer_Brand__Heading-module__Heading___IVpmp Primer_Brand__Heading-module__Heading--1___Ufc7G Primer_Brand__Hero-module__Hero-heading___QuVBH"]')}

    async test_url() {
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
    }

    async email_input() {
        await this.email_field.setValue('homework@task1.com')
    }

    async country() {
        await this.select_country.click()

        await this.select_country_UA.click()
    }

    async checkbox_click() {
        await this.checkbox.click()
    }

    async but_subscribe_click() {
        await this.but_subscribe.click()
    }

    async test_thanks() {
        await browser.waitUntil(async () => {
            return (await this.thanks.isExisting()) === true
        },10000, "Текст неіснує")
    }
}

export default new subscribe_page()