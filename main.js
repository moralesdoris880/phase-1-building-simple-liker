// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').className = 'hidden';



document.addEventListener('click', (e) =>{
  e.preventDefault();
  mimicServerCall().then((value)=>{
    if (value === 'Pretend remote server notified of action!'){
      e.target.innerText = FULL_HEART
      e.target.className = '.activate-heart'
    }
  })
  .catch((value) =>{
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal-message').innerText = value
    setTimeout(() => {document.getElementById('modal').className = 'hidden';
  },3000)
  })
  
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
