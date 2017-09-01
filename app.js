var chucky = document.getElementById('chucky');
// console.log(chucky);
  chucky.addEventListener('click', function(e) {
    //console.log("clicked")
    e.preventDefault();
  //  document.getElementsByClassName('chuckyquote')[0].innerHTML = '';
  /* CHUCK NORRIS QUOTE BEGIN */
    fetch('https://api.chucknorris.io/jokes/random')
    		.then((response) => {
      		return response.json()
      			.then((quotedata) => {
            //console.log(quotedata);
    var newcontent = document.getElementsByClassName('content')[0]
    var quoteH1 = document.createElement('h1')
    var chuckquote = quotedata.value;
  //console.log(newcontent)
    quoteH1.innerHTML = chuckquote;
    newcontent.append(chuckquote)
  //  console.log(chuckquote);


          })
    })

    fetch('https://api.unsplash.com/photos/random/?client_id=263f8444d810b007cfea8a0edda8dc06f8d4f7926591591465db68a774fe1f7b')
    		.then((response) => {
      		return response.json()
      			.then((imgdata) => {
            console.log(imgdata);
            var contenttwo = document.getElementsByClassName('contenttwo')[0]
            var quoteImg = document.createElement('img')
            var imgURL = imgdata.urls.raw;
            quoteImg.setAttribute('src', imgURL)
            contenttwo.append(quoteImg)
  //   var chuckquote = quotedata.value;
  // console.log(newcontent)
  //   quoteH1.innerHTML = chuckquote;
  //   newcontent.append(chuckquote)
        })
      })

})






/* ORIG CODE

var chucky = document.getElementById('chucky');
// console.log(chucky);
  chucky.addEventListener('click', function(e) {
    console.log("clicked")
    e.preventDefault();
  //  document.getElementsByClassName('chuckyquote')[0].innerHTML = '';
   CHUCK NORRIS QUOTE BEGIN
    fetch('https://api.chucknorris.io/jokes/random')
    		.then((response) => {
      		return response.json()
      			.then((quotedata) => {
            console.log(quotedata);
    var newcontent = document.getElementsByClassName('content')[0]
    var quoteH1 = document.createElement('h1')
    var chuckquote = quotedata.value;
  console.log(newcontent)
    quoteH1.innerHTML = chuckquote;
    newcontent.append(chuckquote)
  //  console.log(chuckquote);


          })
    })


})

*/
