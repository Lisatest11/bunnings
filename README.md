# Test scenarios:
•   	Search function and check the response, result

•	    Filter function and check the response, result

•	    Add the product to shopping cart and check the response(not testable on the production, details as below)

•	    Shopping cart details page display the product name/price/ quality as expected(not testable on the production, details as below)

# Demo video:
https://watch.screencastify.com/v/z2L9azEOrv1CwyGTGVIH

(Note: Because the testing is using the production website, and it's using a security service to protect itself from online attacks, so at the end can't add the product to shopping cart successfully, and it's expected.)

# How to run the test from the start:

Step1:
Install tools:

1.Install Visual Studio Code---https://code.visualstudio.com/download

2.Install Visual Studio Code Extensions:

   alexkrechik.cucumberautocomplete----https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete 
   
   streetsidesoftware.code-spell-checker----https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
   
3.Install Node.js-----https://nodejs.org/en/download/

Steps2:

Create your own project:

1.Open Command Prompt

2.Create your project, e.g. 

>>>mkdir QAdemo

>>>cd QAdemo

>>>code .
(will open the Visual Studio Code )

Step3:

1.Open the new terminal

2.Run these command to install cypress and cucumber

  	npm init -y
  
  	npm install cypress
  
  	npm install --save-dev cypress-cucumber-preprocessor

Step4:

Configure the files:

1.	cypress.json 
    
     a.	Configure your baseUrl(test environment: Test, Staging, or Production environment)
     
     b.	Configure your test wondow size
     ![image](https://user-images.githubusercontent.com/95558525/149648617-3b412481-ba29-4264-a854-d1968a51b8ca.png)
2.	support/index.js (configure the uncaught exception to make the test cases keep running)
	![image](https://user-images.githubusercontent.com/95558525/149648635-b59c9e25-125a-4acd-947b-e6d4102b6bdd.png)
    
3.	package.json (configure cucumber) 
 ![image](https://user-images.githubusercontent.com/95558525/149648652-72c5b666-57ed-4f25-9aac-a77332234156.png)
4.	plugins/index.js (configure cucumber) 
![image](https://user-images.githubusercontent.com/95558525/149648659-c7d9c569-e17e-47c3-8ac8-f071be36e2c3.png)


# Create your test

Create your test folder/file in the cypress/integration as the picture below: 

•	Bunnings

    o	addProductToCart
        	addProductToCart.po.js
        	addProductToCart.steps.js
    o	addProductToCart.feature

Test files:

•	feature file: BDD test cases

•	po.js : prefer selecting elements rather than element attributes

•	steps.js: responsible for the steps and actions

https://github.com/Lisatest11/bunnings/tree/main/cypress/integration/Bunnings
