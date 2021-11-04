const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    location: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    parrotsOwned: [
        {
            toys: Array,
            name: {
                type: String
            }
        }
    ]
})

mongoose.model('user', userSchema)

