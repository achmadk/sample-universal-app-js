// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(() => {
	"use strict";

	let app = WinJS.Application;
	let activation = Windows.ApplicationModel.Activation;

	app.onactivated = (args) => {
	    let tBefore = performance.now();
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
			args.setPromise(WinJS.UI.processAll().then(defs.completed));
			let helloButton = document.getElementById("helloButton");
			helloButton.addEventListener("click", defs.buttonClickHandler, false);
			let tAfter = performance.now();
			console.log((tAfter - tBefore).toString());
		}
	};

	app.oncheckpoint = (args) => {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	let defs = {
	    buttonClickHandler: (eventInfo) => {
	        let userName = document.getElementById("nameInput").value;
	        let greetingString = (userName.length >= 1) ? "Hello, " + userName + "!" : 'Insert your name first!';
	        document.getElementById("greetingOutput").innerText = greetingString;
	    },
	    ratingChanged: (eventInfo) => {
	        let ratingOutput = document.getElementById("ratingOutput");
	        ratingOutput.innerText = eventInfo.detail.tentativeRating;
	    },
	    completed: () => {
	        let ratingControlDiv = document.getElementById("ratingControlDiv");
	        let ratingControl = ratingControlDiv.winControl;
	        ratingControl.addEventListener("change", defs.ratingChanged, false);
	    }
	};

	app.start();
})();
