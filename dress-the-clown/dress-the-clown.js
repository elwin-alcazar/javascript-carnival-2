  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//initiate variables
// var headVariable = document.getElementById('head');
// var bodyVariable = document.getElementById('body');
// var shoesVariable = document.getElementById('shoes');
// var headIndex = 0;
// var bodyIndex = 0;
// var shoesIndex = 0;
// var changeIndex = [changeHead, changeBody, changeShoes];
var partIndex = 0;

var index = {head:0, body:0, shoes:0};
var changeIndex2 = ['head', 'body', 'shoes']


function changeClothes (i) {
  var id = changeIndex2[partIndex];
  index[id] += i;
  document.getElementById(id).src = "./images/" + id + ((index[id] % 6 + 6) % 6) + ".png";
}

// function changeHead (i) {
//   headIndex = headIndex + i;
//   headVariable.src = "./images/head" + ((headIndex % 6 + 6) % 6) + ".png";
// } 

// function changeBody (i) {
//   bodyIndex = bodyIndex + i;
//   bodyVariable.src = "./images/body" + ((bodyIndex % 6 + 6) % 6) + ".png";
// }

// function changeShoes (i) {
//   shoesIndex = shoesIndex + i;
//   shoesVariable.src = "./images/shoes" + ((shoesIndex % 6 + 6) % 6) + ".png";
// }

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37: //left
        //changeIndex[partIndex](-1)  
        changeClothes(-1);
        break;
      case 38: //up
        document.getElementById(changeIndex2[partIndex]).classList.remove('highlight');
        partIndex = ((partIndex - 1) % 3 + 3) % 3;
        document.getElementById(changeIndex2[partIndex]).classList.add('highlight');
        break;
      case 39: //right
        changeClothes(1);  
        break;
      case 40: //down
        document.getElementById(changeIndex2[partIndex]).classList.remove('highlight');
        partIndex = ((partIndex + 1) % 3 + 3) % 3;
        document.getElementById(changeIndex2[partIndex]).classList.add('highlight');
        break;
  }
});


