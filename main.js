const first = document.querySelector('#x');
const second = document.querySelector('#y');

if (window.Worker) {
	first = getRndInteger(0,150);
	console.log('x est changée')
	second = getRndInteger(0,150);
	postMessage(workerResult);
} else {
	console.log('Your browser doesn\'t support web workers.')
}


<script>
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
</script> 
