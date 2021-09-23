
/// <reference types="Cypress" />
import Admin from '../pageObjects/admin';
import Home from '../pageObjects/Home';
import Leave from '../pageObjects/leave';
import Login from '../pageObjects/Login';

const login = new Login();
const home = new Home();
const leave = new Leave();
const admin = new Admin();







context('HRM Scenario Verification ', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test if uncaught exceptions from the application appear
      return false;
    });
    Cypress.Cookies.defaults({
      preserve: /session|remember/
    })
  })

  afterEach(() => {
    // cy.saveLocalStorage();
  });

  it('Verify Login ', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com")

    login.enterLoginDetails('Admin','admin123')


  })

  it.skip('Verify Home page ', () => {

    home.verifyMenu()


  })

  it('Verify leave page ', () => {
      leave.clickonLeave()
    login.enterLoginDetails('Admin','admin123')
    leave.assignLeave()


  })

  it('Verify admin page ', () => {
    admin.clickonAdmin()
    login.enterLoginDetails('Admin','admin123')
    admin.searchAdminUserandVerify()


  })
})