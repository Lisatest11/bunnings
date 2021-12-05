Feature: Adding product into cart on Bunnings website
    Scenario: filter the products first then add the first product into cart 
        Given I open the bunnings website homepage
        When I type "Paint" in the search box
        And Click the search button
        Then I search it successfully
        # Note1-----these test cases for checking the filter result amount display correctly
        # When I click the "Store & Availability" button
        # And Click "Delivery" filter
        # Then I filter it successfully
        # And I reset the filter
        When I click the "Store & Availability" button
        And Click "Click & Collect" filter
        Then I filter it successfully
        When I add the first product on the list by clicking the "Cart" button
        Then I add it successfully
        Given I click the user cart icon
        When I open the user cart details page
        Then I can see the product details display as expected

