class Login {

    enterLoginDetails(username,password){
        cy.get('[name="txtUsername"]').clear().type(username);
        cy.get('[name="txtPassword"]').clear().type(password);
        cy.get('[name="Submit"]').click({timeout:4000})
        cy.wait(2000)

        return this;
    }

}

export default Login;