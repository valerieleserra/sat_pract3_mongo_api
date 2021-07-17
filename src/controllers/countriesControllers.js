const Country = require('../models/countriesModel')

exports.createCountry = (req , res) => {
    new Country(req.body)
    .save()
    .then(() => res.status(200).send('Created country'))
    .catch(err => console.error('Could not create country',err))
}

exports.updateCountry = (req , res) => {
    Country
    .findOneAndUpdate({name: req.params.name} , {$set:req.body})
    .then(() => res.status(200).send('Country updated'))
    .catch(err => console.log('Country not updated.' , err))
}

exports.deleteCountry = (req , res) => {
    Country
    .findOneAndDelete({name: req.params.name})
    .then(() => res.status(200).send('Deleted country'))
    .catch(err => console.log(err))
}

exports.getOneCountry = (req , res) => {
    Country
    .findOne({name: req.params.name})
    .then(country => res.send(country))
    .catch(err => console.log(err))
}