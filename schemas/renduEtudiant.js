const mongoose = require('mongoose');

const renduStudent  = mongoose.Schema({
    idStudent : String,
    idExercie : String,
    contenu : String,
    exerciceFini: Boolean,
})
