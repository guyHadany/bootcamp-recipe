const express = require( 'express' ) //install
const router = express.Router()
const request = require('request') //install



router.get('/sanity', function (req, res) {
console.log('ok')
res.send('hello')  
})

router.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(error, response, body){
      const myData = JSON.parse(response.body || "{}")
      const
      console.log(myData.results)
      res.send(myData.results)
    })
    })

module.exports = router