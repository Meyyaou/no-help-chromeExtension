/**declarativeNetRequest might be best approach */

//const redUrl = document.getElementById('urlDisplay')
/*STEP2: verify if it's chat.openai.com maybe block the http res? */

chrome.runtime.onInstalled.addListener(async () => {
  try {
    // Fetch rules from rules.json
    const response = await fetch(chrome.runtime.getURL('rules.json'));
    const rules = await response.json();

    // Apply static rules
    await chrome.declarativeNetRequest.updateStaticRules({ 
      rules: rules.rules 
    });
    console.log("Redirect rules have been added.");
  } catch (error) {
    console.error("Error adding redirect rules:", error);
  }
});


      /*STEP3: redirect to our website */
   
   /*TODO add a number of times this works */