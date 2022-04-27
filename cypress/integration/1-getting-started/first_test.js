
const site_url = "http://localhost:8080";
const login_button = "button[type='submit']";
const keyword_button = 'span[class="glyphicon glyphicon-record"]';
const newKeyword_button = 'button[class="btn btn-success"]';
const params_button = 'span[class="glyphicon glyphicon-list-alt"]';
const newParams_button = 'button[ng-click="addParameter()"]';
const scheduler_button = 'span[class="glyphicon glyphicon-time"]';
const newTask_button = 'button[ng-click="addSchedulerEntry()"]';
const hamburger_menu = 'span[class="glyphicon glyphicon-menu-hamburger"]';






describe('Testing Step', () => {


    it ('log in Step', () => {

        cy.visit(site_url);
        cy.get(login_button).click();
        cy.get(keyword_button).click();
        cy.get(newKeyword_button);
        cy.get(params_button).click();
        cy.get(newParams_button).location();
        cy.get(scheduler_button).click();
        cy.get(newTask_button).location();
        cy.get(hamburger_menu).click();
        cy.get('a').contains('Current Operations').click()
        

    })
})