Promise.resolve(1).then(
  function(v) {
    console.log(v);
  },
  function(e) {
    console.log("TCL: e", e);
  }
);
