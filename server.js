const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, () => {
        console.log("Connected to port 3000!");
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.put('/checker', (req, res) => {
      let palindrome = req.body.palindrome
console.log(palindrome);
function isPalindrome(word){
  let newWord = word.split("").reverse().join("")
  return word === newWord
}
    res.send(isPalindrome(palindrome))
})
