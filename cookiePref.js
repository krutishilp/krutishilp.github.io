
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Enable Targeting Cookies
function enableTargeting() {
	document.getElementById("myPopup").style.display = 'none';	
    OneTrust.UpdateConsent("Category","C0004:1");
}



// WAIT for OT SDK to load
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
		
waitForElm('#onetrust-consent-sdk').then((elm) => {
	document.getElementById("manageCookie").innerHTML = "Click here";
	var targetingCheckbox = document .getElementById("ot-group-id-C0004");
	targetingCheckbox.addEventListener('change', (event) => {
	  if (event.currentTarget.checked) {
	    	document.getElementById("myPopup").style.display = 'none';	
	  } else {
	    	document.getElementById("myPopup").style.display = 'block';	
	  }
	});
});