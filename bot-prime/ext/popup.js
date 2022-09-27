let mudarCor = document.getElementById("changeColor");

const mudar = () => {
	var topOne = document.querySelectorAll('a[aria-label]')[245].getAttribute('aria-label');
	var topTwo = document.querySelectorAll('a[aria-label]')[246].getAttribute('aria-label');
	var topThree = document.querySelectorAll('a[aria-label]')[247].getAttribute('aria-label');
	var topFour = document.querySelectorAll('a[aria-label]')[248].getAttribute('aria-label');
	var topFive = document.querySelectorAll('a[aria-label]')[249].getAttribute('aria-label');
	var topSix = document.querySelectorAll('a[aria-label]')[250].getAttribute('aria-label');
	var topSeven = document.querySelectorAll('a[aria-label]')[251].getAttribute('aria-label');
	var topEight = document.querySelectorAll('a[aria-label]')[252].getAttribute('aria-label');
	var topNine = document.querySelectorAll('a[aria-label]')[253].getAttribute('aria-label');
	var topTen = document.querySelectorAll('a[aria-label]')[254].getAttribute('aria-label');


	console.log(`1 ${topOne}`);
	console.log(`2 ${topTwo}`);
	console.log(`3 ${topThree}`);
	console.log(`4 ${topFour}`);
	console.log(`5 ${topFive}`);
	console.log(`6 ${topSix}`);
	console.log(`7 ${topSeven}`);
	console.log(`8 ${topEight}`);
	console.log(`9 ${topNine}`);
	console.log(`10 ${topTen}`);

	var myWindow = window.open('', 'MsgWindow', "width=200, height=100");
	myWindow.document.write(`
	  1 ${topOne}
	`)
}



mudarCor.addEventListener("click", async function(){
	let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		function: mudar,
	});
	
});

