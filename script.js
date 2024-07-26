/*STEP1: recuperer l'url of current website */

document.addEventListener('DOMContentLoaded', async()=>{
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  
  if (tab) {
    document.getElementById('urlDisplay').textContent = tab.url;
    if(tab=='https://chatgpt.com/'){
      console.log("chatgpt detected!")
    }
     } else {
    document.getElementById('urlDisplay').textContent = 'No active tab found';
  }
});
