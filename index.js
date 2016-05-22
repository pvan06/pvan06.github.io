let sizeElement = document.getElementById("size");
let poundsElement = document.getElementById("pounds");

let drawTriangle = function(numLines) {
  console.log("new attempt");
  let numTry = 1
  let numPrint = "#"
  let numPrintLn = "\n"
  if (numLines < 1) {

    console.log("error, must be greater than zero")
  } else {

    while (numTry <= numLines) {
      console.log(numPrint)
      numTry = numTry + 1
      numPrint = numPrint+"#"
      numPrintLn = "#"+numPrintLn
    }
  }
  
  console.log(numPrintLn);
}

sizeElement.onchange = function() {
  let size = parseInt(sizeElement.value);
  drawTriangle(size);
};

