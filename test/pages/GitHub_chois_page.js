class chois_page {

    get h1_text () {return $('//h1[@class="d-none d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]')}
    get enterprise () {return $('//div[@class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]')}

    async text_plan(){
        await browser.waitUntil(async () => {
            return (await this.h1_text.getText()) === 'Pick your trial plan'
          },10000, "Текст несхожий")
    }

    async enterprise_click(){
        await this.enterprise.click()
    }
}

export default new chois_page()