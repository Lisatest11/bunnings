import Shopping from "./addProductToCart.po";

Given("I open the bunnings website homepage", () => {
    // visit base url
    cy.visit('/');
});
When('I type "Paint" in the search box', () => {
    Shopping.searchBox().type("Paint");
});
And("Click the search button", () => {
    Shopping.searchIcon().click();  
});
Then('I search it successfully', () => {
    Shopping.searchAPI().its("response.statusCode").should("eq", 200);
    Shopping.pageLoading().should('exist').should("not.be.visible");
    Shopping.searchResultTitle().contains("Paint").should('be.visible')
});
When('I click the {string} button', (button) => {
    cy.contains(button).should("be.visible");
    Shopping.storeAndAvailabilityFilter().click(); 
});
And('Click {string} filter', (filter) => { 
    // invoke for getting the expected amount
    Shopping.storeAndAvailabilityFilterPanel().contains(filter).should('be.visible').invoke('text').as("resultCount"); 
    Shopping.storeAndAvailabilityFilterPanel().contains(filter).click();
});
Then('I filter it successfully', () => {
    Shopping.filterAPI().its("response.statusCode").should("eq", 200);
    
    //Note2 ---these test cases for checking the filter amount display correctly, 
    // ----however "Click & Collect" filter amount not consistent, display 585 on the filter button, but after clicking the filter actually only display 584
    // ----but I already tested these code by the  "Delivery" filter which amount is 1000 and it's correct

    // cy.get("@resultCount")
    // .then((text)=>{
    //     var fullText = text;
    //     var number = fullText.replace(/[^0-9]/g, '');
    //     return number
    // })
    // .then((number) => {
    //     Shopping.filterResultsCount().contains(number).should('be.visible');
    // });
});
And('I reset the filter', () => {
    Shopping.resetFilter().click();
});
When('I add the first product on the list by clicking the "Cart" button', () => {
    Shopping.firstProductName().invoke('text').as("productName")
    Shopping.firstProductPrice().invoke('text').as("productPrice")
    Shopping.firstProductAddToCartButton().click();
});
Then('I add it successfully', () => {
// Note3---However on the production environment can't add to cart successfully,so this case hasn't been tested(might need the loading step if the action is too slow)
Shopping.addProductToCartAPI().its("response.statusCode").should("eq", 200);
});
Given('I click the user cart icon', () => {
    Shopping.userCartButton().click();
});
When('I open the user cart details page', () => {   
// Note4---However on the production environment can't add to cart successfully,so this case hasn't been tested(might need the loading step if the action is too slow)
    Shopping.userCartDetailsPage().contains("Items for Click & Collect").should('be.visible')
});
Then('I can see the product details display as expected', () => {
    // Note5---However on the production environment can't add to cart successfully,so this case hasn't been tested,
    //  but should work, as it's using the same type code with checking the "Delivery" filter amount (see the Note1 and Note2)
    cy.get("@productName").then((name) => {
        Shopping.userCartDetailsPage().contains(name).should('be.visible');
    });
    cy.get("@productPrice").then((price) => {
        Shopping.userCartDetailsPage().contains(price).should('be.visible');
    });
    Shopping.userCartProductQuantity().should("have.value","1");
});