/// <reference types="Cypress" />
import data from "../fixtures/userdata.json"
import contactPage from "../page_object/contactus_page"

describe("i6 Evaluation Task", ()=>{

    it("Go to Home Page", ()=>{
        cy.visit("/")
        cy.contains("About").click()
        cy.get(contactPage.contactUsButton).click()
    })

    it("Submit Contact Us Form", ()=>{
        cy.get(contactPage.f_Name).type(data.first_name)
        cy.get(contactPage.l_name).type(data.last_name)
        cy.get(contactPage.email).type(data.email)
        cy.get("select").select("Careers")
        cy.get(contactPage.optin_email).check()
        cy.get(contactPage.submit).click()
    })
})