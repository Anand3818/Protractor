# Here is the overview of e2e_automation

The new automation framework is in place to increase the readability of the framework. 

## We will be having 4 major folders in our e2e_automation:
1. config : which consists of protractor conf, config file etc.
2. .env file
3. pages : which consists of all the functions or helper functions related to specific pages or     operations.
4. specs: consisting of all the specs.
    Specs consists of 2 sub-folders: 
    * Chrome_Extensions 
    * Dashboard 

### Further we will distinguish between:
    * Smoke
    * Regression


## How to run test specs in e2e_automation

* Run command to get all packages required
    
    "npm run pretest:e2e"
    
* Run command to run test specs

    "npm run test:e2e_automation"
    
    Can pass enviornment on which we want to run the test for eg:

    'npm run test:e2e_automation --baseUrl="https://dashboard.tenfold.com/" '

## For Running Chrome_extension:
For running on any user, have to update test-data's inside config > E2Econfig.js   
like; specific number with single-match call should be there,
multi-match should be there and no-match as well.
> Have to update extension,orgId,account no. and login credentials(for both CRM and Dashboard) inside E2E config.

>Go to spec STC16_AssociateCall.spec.js and change the record name replace it with the name availiable in your crm.