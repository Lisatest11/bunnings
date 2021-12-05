export default class Shopping {
    static searchBox() {
        return cy.get('input[type="search"]');
    }
    static searchIcon() {
        //find the API request after clicking the search button
        cy.intercept({
            method: "POST",
            url: "https://api.prod.bunnings.com.au/v1/search/global",
        }).as("searchAPI");
        return cy.get('button[id="crossIcon"]');
    }
    //check the API request response status is 200
    static searchAPI() {
        return cy.wait("@searchAPI");
    }
    static pageLoading() {
        return cy.get('#loading-hammer');
    }
    static searchResultTitle() {
        return cy.get('.searchTerm').find('h2');
    }
    static storeAndAvailabilityFilter() {
        return cy.get('.filterContainer').contains("Store & Availability");
    }
    static storeAndAvailabilityFilterPanel() {
        //find the API request after clicking the filter
        cy.intercept({
            method: "POST",
            url: "https://api.prod.bunnings.com.au/v1/search/global",
        }).as("filterAPI");
        return cy.get('.filterPanel1');
    }
    static filterAPI() {
        return cy.wait("@filterAPI");
    }
    static filterResultsCount() {
        return cy.get('.resultsCount');
    }
    static resetFilter() {
        return cy.get('button[type="button"]').contains("Reset");
    }

    static firstProduct() {
        return cy.get('.resultsCountContainer').next().children().eq(0);
    }
    static firstProductName() {
        return this.firstProduct().find('.text-rating-container>.productTileTitle');
    }
    static firstProductPrice() {
        return this.firstProduct().find('.search-price');
    }
    static firstProductAddToCartButton() {
        //find the API request after clicking the cart button
        cy.intercept({
            method: "POST",
            url: "https://api.prod.bunnings.com.au/v1/search/recommendation",
        }).as("addProductToCartAPI");
        return this.firstProduct().find('button[data-locator="atcButton"]');
    }
    //check the API request response status is 200
    static addProductToCartAPI() {
        return cy.wait("@addProductToCartAPI");
    }
    static userCartButton() {
        return cy.get('#icon-cart');
    }
    static userCartDetailsPage() {
        return cy.get('.cartDetails');
    }
    static userCartLastProduct() {
        return cy.get('.cartTileContainer').last();
    }
    static userCartProductQuantity() {
        return this.userCartLastProduct().find('input');
    }
}