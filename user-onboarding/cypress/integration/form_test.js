describe('Quotes app', () => {
    // here go our tests
    beforeEach(() => {
        //code we want running before our tests run
        cy.visit('http://localhost:3000')
    });
    const userInput = () => cy.get('input[name="username"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passInput = () => cy.get('input[name="password"]');
    const checkInput = () => cy.get('input[name="tos"]');
    const btn = () => cy.get('button');

    it('Sanity test to make sure tests work', () => {
        expect (1 + 2).to.equal(3);
        //expect is an assertion, there can be many per test
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({})//not strict ==
        expect({}).to.eql({}); //strict ===
    });

    it('can type in the inputs', () => {
        //grab the inputs
        //assert that they are empty
        //type in them
        // cy.get('input[name="text"]').should("have.value", "")
        // cy.get('input[name="text"]').type("Have fun learning React!")
        // Make it D.R.Y.
       userInput()
        .should("have.value", "")
        .type("AmyLynn")
        .should("have.value", "AmyLynn")
        emailInput()
        .should("have.value", "")
        .type("Rhiannon@gmail.com")
        .should("have.value", "Rhiannon@gmail.com")
        passInput()
        .should("have.value", "")
        .type("Password1234")
        .should("have.value", "Password1234")
        checkInput().click()

    });

    it('Button disabled until both inputs are filled out', () => {
        // arrange sanity checks
        // act like typing or clicking
        // assert that action has the effect we expect

        //new syntax you will need for this test:
        // (a) "be.disabled"
        // (b) .clear()
        btn().should("be.disabled")
        userInput().type("Emma")
        btn().should("be.disabled")
        userInput().clear()
        passInput().type("Password1234")
        btn().should("be.disabled")
        userInput().type("Emma")
        checkInput().click()
        btn().should("be.disabled")
        emailInput().type("emmasofialaz@gmail.com")
        btn().should("not.be.disabled")
    });
})