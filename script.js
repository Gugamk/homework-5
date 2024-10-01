let count = 10;
let countDown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(countDown);
    console.log(`Finished`);
  } else if (count % 2 !== 0) {
    document.body.style.backgroundColor = `White`;
  } else if (count % 2 === 0) {
    document.body.style.backgroundColor = `Black`;
  }
}, 1000);
