const User = require("..models/user")

const getUser = (req, res) =>{
    return User.find({})
        .then(users => {
            return res
                .status(200)
                .send(users)
        })
        .catch(error => {
            return res
                .status(500)
                .send({
                    message: `${error.message}`
                })
        })
}


const getUserByID = (req, res) => {
    const {id} = req.params

    return User.findById(id).then(user => {
        if (user) {
            return res.status(200).send(user)
        } else {
            return res.status(404).send('Not found')
        }
    })
        .catch(error => {
            return res
                .status(500)
                .send({
                    message: `${error.message}`
                })
        })
}



////
catch(error => {
    if (error.name == "ValidationError") {
        Object.values(error.errors).map(error => error.message)
        return res.status(400).send(message: error)
    }
})

module.export {
    getUser,
}
