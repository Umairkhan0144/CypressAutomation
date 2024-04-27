import Login from "../../PageObjects/LoginPage.js";

describe('Auth Test Cases using POM and fixtures', () => {

    //fixture through Hook - for multiple it blocks
    let userdata;
    before( ()=>{
        cy.fixture("orangehrm").then((data)=>{
        userdata=data;
    })
    })

    it('Verify login page title', () => {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
        cy.title().should('eq','OrangeHRM')
    }) 
    
    //using pom
    it('Login Test With Valid Data', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        const ln=new Login();
        ln.setUserName(userdata.username)
        ln.setPassword(userdata.password)
        ln.clickSubmit();
        ln.verifyLogin();
    })
})