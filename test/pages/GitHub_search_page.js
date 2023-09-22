class search {

    get word() {return $('//a[@href="/nektos/act"]/span[@class="Text-sc-17v1xeu-0 qaOIC search-match"]/em')}

    async fiend_word() {
        await browser.waitUntil(async () => {
            return (await this.word.getText()) === 'act'
          },10000, "Текст неспівпадає") 
    }

}

export default new search()