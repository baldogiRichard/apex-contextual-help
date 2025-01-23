/* globals apex,$ */
window.CONTEXTUALHELP = window.CONTEXTUALHELP || {};

//Execute script
CONTEXTUALHELP.main = function(init) { 

   //Variables
   var config;
   const driverObj = driver();

   //Call Initialization Code
   if (init && typeof init == 'function') init.call(this, config);

   //Init Contextual Help object
   driverObj.highlight(config);

}