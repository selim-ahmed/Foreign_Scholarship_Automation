export class admintUser{

    navigate(){

        cy.visit("http://103.4.145.251:3030/")
        cy.viewport(1024, 1080)

    }
       
   
    adminlogin(username, pass){
        cy.get(':nth-child(1) > .form-control').type(username)
        cy.get(':nth-child(2) > .form-control').type(pass)
        cy.get('.btn-md').click()
        cy.wait(3000) 
    }

    adminSettings(){

        cy.get('.flex-column > :nth-child(1) > .nav-link > :nth-child(1) > .sidebar-text').click()


    }


}
