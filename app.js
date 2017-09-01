var chucky = document.getElementById('chucky');
// console.log(chucky);
  chucky.addEventListener('click', function(e) {
    console.log("clicked")
    e.preventDefault();
  //  document.getElementsByClassName('chuckyquote')[0].innerHTML = '';
  /* CHUCK NORRIS QUOTE BEGIN */
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
