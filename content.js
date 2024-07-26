/**declarativeNetRequest might be best approach */

/*STEP1: recuperer l'url of current website */
/*STEP2: verify if it's chat.openai.com maybe block the http res? */
/*STEP3: redirect to our website */
   
const targetUrl ="https://chatgpt.com";
const redirectUrl=chrome.runtime.getURL("hey.html");
if (window.location.href.startsWith(targetUrl)){
  window.location.replace(redirectUrl);
}
/*TODO add a number of times this works */