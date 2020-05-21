let userMessageToBot = "";
userMessageToBot = prompt("Ecris un message au bot");	

let lastChar = userMessageToBot[userMessageToBot.length - 1];

function isUpperCase(str) {
	return userMessageToBot ===userMessageToBot.toUpperCase();
}

if (lastChar === "?") {
	console.log("Ouais Ouais...");
} else if (isUpperCase(userMessageToBot) && userMessageToBot !== "") {
	console.log("Pwa, calme-toi...");
} else if (userMessageToBot.indexOf("Fortnite") !== -1) {
	console.log("on s' fait une partie soum-soum ?");
} else if (userMessageToBot === "") {
	console.log("t'es en PLS ?")
} else {
	console.log("balek");
}