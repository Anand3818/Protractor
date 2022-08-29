const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;
const ctdTestPO = require('../pages/CTDTestPage.po')

function SwitchPO(){
  let self=this;
  self.phoneNumber0 = element(by.id('callinize-4155991160-925'));


  self.switchToNewTab = async function(tabno,pagetoload){
    browser.executeScript('window.open()').then(function () {
        browser.getAllWindowHandles().then(function (handles) {
               var secondWindow = handles[tabno];
               browser.switchTo().window(secondWindow).then(function () {
                   return browser.get(pagetoload);
               });
        });
   });
  }
  self.switchWindow = async function(tabno){
        browser.getAllWindowHandles().then(function (handles) {
               var secondWindow = handles[tabno];
               browser.switchTo().window(secondWindow)
            })   
    }


  self.clickToDial = async function(){
        await self.phoneNumber0.click();   
    } 
}
module.exports= new SwitchPO;