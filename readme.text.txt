How to run the test from the start:
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
see the Cypress document