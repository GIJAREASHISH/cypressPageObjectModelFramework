class Leave{


  //Enter details on leave form
   assignLeave(){
      cy.get('#menu_leave_assignLeave').click({force:true})
      cy.get("input[name='assignleave[txtEmployee][empName]']").type("test")
      cy.get("select[name='assignleave[txtLeaveType]']").type("US-Vacation")
      cy.get("input[name='assignleave[txtFromDate]']").type("2021-08-28")
      cy.get('.largeTextBox > label').click({force:true})
      cy.get("#assignleave_txtToDate").type("2021-08-28")
 
      cy.get("#assignBtn").click({force:true})
      return this; 
    }

  clickonLeave(){
    
    cy.get('#menu_leave_viewLeaveModule > b').click({force:true})
  }
  }
export default Leave;