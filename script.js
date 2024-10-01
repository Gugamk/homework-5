let count = 10;
let countDown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(countDown);
    setTimeout(() => {
      console.log(`Finished`);
    }, 2000);
  } else if (count % 2 === 0) {
    document.body.style.backgroundColor = `Black`;
  } else if (count % 2 !== 0) {
    document.body.style.backgroundColor = `White`;
  }
}, 1000);
