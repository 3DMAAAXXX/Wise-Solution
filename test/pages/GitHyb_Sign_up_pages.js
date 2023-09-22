class sign_up {

    get message () {return $('//span[@class="text-mono text-gray-light-mktg"]')}
    get email () {return $('//input[@id="email"]')}
    get password () {return $('//input[@id="password"]')}
    get login () {return $('//input[@id="login"]')}
    get y_answer () {return $('//input[@name="opt_in"]')}
    get email_but () {return $('//button[@type="button" and @data-optimizely-event="click.signup_continue.email"]')}
    get pas_but () {return $('//button[@type="button" and @data-optimizely-event="click.signup_continue.password"]')}
    get log_but () {return $('//button[@type="button" and @data-continue-to="opt-in-container"]')}
    get y_answer_but () {return $('//button[@data-continue-to="captcha-and-submit-container"]')}

    async exept_mes(){
        await browser.waitUntil(async () => {
            return (await this.message.isExisting()) === true
          },10000, "Текст існує")
        console.log(await this.message.isExisting())
    }

    async email_input(){
        await browser.waitUntil(async () => {
            return (await this.email.isDisplayed()) === true
          },10000, "Поле неактивне")
          
        await this.email.addValue('homework@task1.com')
    }

    async email_but_click(){
        await browser.waitUntil(async () => {
            return (await this.email_but.isClickable()) === true
          },10000, "Кнопка неактивна")
        await this.email_but.click()
    }

    async password_input(){
        await browser.waitUntil(async () => {
            return (await this.password.isDisplayed()) === true
          },10000, "Поле неактивне")
        await this.password.setValue('rGMAJ4tTNhJEY78g')
    }

    async pas_but_click(){
        await browser.waitUntil(async () => {
            return (await this.pas_but.isClickable()) === true
          },10000, "Кнопка неактивна")
        await this.pas_but.click()
    }

    async login_input(){
        await browser.waitUntil(async () => {
            return (await this.login.isDisplayed()) === true
          },10000, "Поле неактивне")
        await this.login.setValue('RAGNAROK1028346')
    }

    async log_but_click(){
        await browser.waitUntil(async () => {
            return (await this.log_but.isClickable()) === true
          },10000, "Кнопка неактивна")
        await this.log_but.click()
    }

    async y_input(){
        await browser.waitUntil(async () => {
            return (await this.y_answer.isDisplayed()) === true
          },10000, "Поле неактивне")
        await this.y_answer.setValue('y')
    }

    async y_but_click(){
        await browser.waitUntil(async () => {
            return (await this.y_answer_but.isClickable()) === true
          },10000, "Кнопка неактивна")
        await this.y_answer_but.click()
    }

}

export default new sign_up()