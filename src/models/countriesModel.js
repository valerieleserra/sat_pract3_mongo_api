const mongoose = require ('mongoose')

const CountrySchema = mongoose.Schema({ //
    name: String,
    capital: String,
    population: Number,
    language: String,
    volcanos: Boolean

})

module.exports = mongoose.model('Country',CountrySchema)