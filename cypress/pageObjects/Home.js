


class Home{

    verifyMenu(){

    var menu=["Admin","PIM","Leave","Time","Recruitment","My Info","Performance","Dashboard","Directory","Maintenance","Buzz"]

    cy.get("#mainMenuFirstLevelUnorderedList").each(($menu,index)=>{

      cy.wrap($menu).invoke('text').then((text)=>{
        cy.wrap({menuNew:menu[index]}).its('menuNew').should('eq',text)

      })

    })
    return this;
    }
  
  }
export default Home;