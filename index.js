let sizeElement = document.getElementById("size");

let drawTriangle = function(numLines) {
  console.log("new attempt");
  let numTry = 1
  let numPrint = "#"
  if (numLines < 1) {

    console.log("error, must be greater than zero")
  } else {

    while (numTry <= numLines) {
      console.log(numPrint)
      numTry = numTry + 1
      numPrint = numPrint+"#"
    }
  }
}

sizeElement.onchange = function() {
  let size = parseInt(sizeElement.value);
  drawTriangle(size);
};

