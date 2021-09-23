class Admin{

    //Verify search admin user
     searchAdminUserandVerify(){
  
        cy.get("input[name='searchSystemUser[userName]']").type("Admin")
        cy.get('input[class="searchbutton"]').click({force:true})
        cy.wait(3000)
       var count= cy.readFile('cypress/fixtures/employee.json')
       var totalLength=Object. keys(count). length;
        cy.fixture('employee.json').then((employee) => {
            for(var i=0;i<totalLength;i++){
        cy.get('tr[class="odd"]>td[class="left"]').contains(employee.userName)
            }
            })
            return this;
      }

      clickonAdmin(){
        cy.get('#menu_admin_viewAdminModule > b').click({force:true})
      }
    
    }
    export default Admin;