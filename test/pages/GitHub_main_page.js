class main_page {

    get Sign_up () {return $('//a[@href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home" and @class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]')}
    get Text_h2 () {return $('//h2[@class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]')}
    get but_enterprice () {return $('//a[@class="btn-mktg btn-large-mktg btn-muted-mktg" and @href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')}
    get but_subscribe () {return $('//a[@class="btn-mktg mb-4 btn-muted-mktg"]')}
    get search_click() {return $('//button[@class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"]')}
    get search_input() {return $('//input[@name="query-builder-test"]')}
    get word() {return $('//a[@href="/nektos/act"]/span[@class="Text-sc-17v1xeu-0 qaOIC search-match"]/em')}
    get pricing() {return $('//a[@class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]')}

    async sign_up_click(){
        await this.Sign_up.click()
    }

    async text_existing(){
        await browser.waitUntil(async () => {
            return (await this.Text_h2.isExisting()) === true
        },10000, "Текст не існує")

        await this.Text_h2.scrollIntoView()

    }

    async but_enterprice_click(){
        await this.but_enterprice.click()
    }

    async but_subscribe_click(){
        await browser.waitUntil(async () => {
            return (await this.but_subscribe.isExisting()) === true
        },10000, "Кнопка не існує")

        await this.but_subscribe.scrollIntoView()

        await browser.waitUntil(async () => {
            return (await this.but_subscribe.isClickable()) === true
        },10000, "Кнопка не клікабельна")

        await this.but_subscribe.click()

    }

    async search() {
        await this.search_click.click()

        await this.search_input.setValue('act')

        await browser.keys(["Enter"])
    }

    async pricing_click() {
        await this.pricing.click()
    }

}

export default new main_page()