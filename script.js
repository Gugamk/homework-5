let count = 10;
let countDown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(countDown);
    setTimeout(() => {
      console.log(`Finished`);
      document.body.style.backgroundColor = `White`;
    }, 2000);
  } else if (count % 2 === 0) {
    document.body.style.backgroundColor = `White`;
  } else if (count % 2 !== 0) {
    document.body.style.backgroundColor = `Black`;
  }
}, 1000);
