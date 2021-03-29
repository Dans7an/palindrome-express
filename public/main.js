document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const word = document.querySelector("#userName").value;
console.log(word);
  fetch(`checker`, {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'palindrome': word
    })
  })
    .then(response => response.json())
    .then((data) => {
    if(data){
      document.querySelector("h2").innerText = 'Yes, it is a palidrome';
      console.log('Yes, it is a palidrome');
    } else {
      document.querySelector("h2").innerText = 'No, it is not a palidrome'
      console.log('No, it is not a palidrome');
    }
    });

}
