class pricing_page {

    get text_platform () {return $('//h1[@class="h2-mktg"]')}
    get compare_all_features() {return $('//a[@href="#compare-features"]')}
    get text_fratures() {return $('//h1[@class="h1"]')}

    async text_displayed() {
        await browser.waitUntil(async () => {
            return (await this.text_platform.isDisplayed())
        },10000, "Текст невидно")
    }

    async compare_click() {
        await this.compare_all_features.scrollIntoView()

        await this.compare_all_features.click()

        await browser.waitUntil(async () => {
            return (await this.text_platform.isExisting())
        },10000, "Текст неіснує")
    }
}

export default new pricing_page()