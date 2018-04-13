//We need Express lib to use router
const express = require('express');
//instantiate router from Router Method in express lib
const router = express.Router();

//require the pokemon.js in models that represents our database
const pokemon = require('../models/pokemon');



//Index Route with A list of Pokemon
router.get('/', (req, res)=>{
	res.render('index.ejs', {
		heading: 'Welcome To The Pokemon Index!',
		thePokemon: pokemon 
	})
});


//Delete Route
router.delete('/:id', (req, res)=>{
	pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon');
})


//route to new page
router.get('/new', (req, res)=>{
	res.render('new.ejs', {
		heading: 'Add A New Pokemon!'
	});
})

//route to add pokemon
router.post('/', (req, res)=>{
	newPokemon = {
		name: req.body.name,
		type: req.body.type,
		hp: req.body.hp,
		img:req.body.img
	}

	pokemon.push(newPokemon);
	res.redirect('/pokemon')
})







































//Export routers to any files that are requiring this file
module.exports = router;