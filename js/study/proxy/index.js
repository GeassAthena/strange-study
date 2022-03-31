function delay(t) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(10);
    }, t);
  });
}

function justTesting(input) {
  return delay(5000).then(function(res) {
    return input + res;
  });
}

justTesting(29).then(function(val) {
  console.log(val);
});
