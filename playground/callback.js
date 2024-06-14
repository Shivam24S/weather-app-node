function callbackFunc(sumData) {
  console.log(sumData);
}

function add(a, b, callbackFunc) {
  setTimeout(() => {
    let sum = a + b;

    callbackFunc(sum);
  }, 2000);
}

add(1, 4, callbackFunc);
