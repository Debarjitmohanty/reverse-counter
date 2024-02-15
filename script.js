let countdownInterval;

function startCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  const inputNumber = parseInt(document.getElementById('inputNumber').value);

  if (isNaN(inputNumber)) {
    alert('Please enter a valid number!');
    return;
  }

  let count = inputNumber;
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = count;

  countdownInterval = setInterval(() => {
    count--;
    if (count >= 0) {
      countdownElement.textContent = count;
    } else {
      clearInterval(countdownInterval);
      countdownElement.textContent = 'Countdown Complete!';
    }
  }, 1000);
}




let number=19;
number++;
console.log(number);
