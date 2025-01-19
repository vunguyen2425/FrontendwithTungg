  var a = 10;
  var b = 20;
  var c = 30;
  var d = 40;
  // var e = a > b && c < d;
  var e = a > b || c < d;

  console.log(e);
  console.log(!e);

  if (a>b||d>c){
    console.log("True")
  }
  else{
    console.log("False")
  }

  if (a>b&&d>c){
    console.log("True")
  }
  else{
    console.log("False")
  }