<<<<<<< HEAD
  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//  declare all unicorn images
var image0 = './images/unicorn-0.png';
var image1 = './images/unicorn-1.png';
var image2 = './images/unicorn-2.png';
var image3 = './images/unicorn-3.png';
var imageList = [image0, image1, image2, image3];
var unicornArray = document.getElementsByClassName('inflate-an-image');
var captionlist = ["Help! I'm deflated!", "Oh, hello. I really appreciate you helping me", "Almost there", "Thank you!"]
var captionArray = document.getElementsByClassName('caption')

// initiate unicorns
for (i = 0; i < unicornArray.length; i++) {
  unicornArray[i].count = 0;
  unicornArray[i].src = imageList[unicornArray[i].count];
  captionArray[i].innerHTML = captionlist[unicornArray[i].count];
}

// change picture
function changeImage(id, source){
  unicornArray[id].count = Math.min(unicornArray[id].count+1, 3)
  unicornArray[id].src = source[unicornArray[id].count];
  captionArray[id].innerHTML = captionlist[unicornArray[id].count];
  if (unicornArray[id].count === imageList.length-1) {
    unicornArray[id].onclick = function() {
      return false;
    }
    if (unicornArray[0].count + unicornArray[1].count + unicornArray[2].count === 9) {
      //AudioPause("carousel");
      playAudio("success");
      setTimeout(function(){thankAlert2()}, 1000);
    }
    else {
      playAudio("smallsuccess");
      setTimeout(function(){thankAlert(id + 1)}, 100);
      }  
  }
}

function thankAlert(x) {
  alert("Unicorn "+ x +" says thanks! Now go help the others!");
}

function thankAlert2() {
  alert("You've helped all the unicorns! Nice Work");
}

function playAudio(id) {
  document.getElementById(id).play()
}

function AudioPause(id) {
  document.getElementById(id).pause()
}
||||||| empty tree
=======
  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")
>>>>>>> 470659f1f1f80aedd015bf18c5222922caaf3176
