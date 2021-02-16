const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
	const myWorker = new Worker("worker.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	second.onchange = function() {
	  myWorker.postMessage([first.value, second.value]);
	  console.log('Message posted to worker');
	}

	myWorker.onmessage = function(e) {
		  console.log('Message reçu depuis le script principal.');
		  var workerResult = 'Résultat : ' + (e.data[0] * e.data[1]);
		  console.log('Envoi du message de retour au script principal');
		  postMessage(workerResult);
}
} else {
	console.log('Your browser doesn\'t support web workers.')
}
