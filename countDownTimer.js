let setTime = 50;

const timer = setInterval(() => {
  console.log(--setTime);

  if (setTime === 0) {
    clearInterval(timer);
  }
}, 100);
