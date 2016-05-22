let sizeElement = document.getElementById("size");
let poundsElement = document.getElementById("pounds");

let drawTriangle = function(numLines) {
  console.log("new attempt");
  let numTry = 1
  let numPrint = "#"
  let numPrintLn = ""
  if (numLines < 1) {

    console.log("error, must be greater than zero")
  } else {

    while (numTry <= numLines) {
      numTry = numTry + 1
      numPrintLn = numPrintLn+numPrint+"\n"
      numPrint = numPrint+"#"
    }
  }
  
  return numPrintLn;
}

sizeElement.onchange = function() {
  let size = parseInt(sizeElement.value);
  let triangle = drawTriangle(size);
  poundsElement.innerHTML = triangle;
};

