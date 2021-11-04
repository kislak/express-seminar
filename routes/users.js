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

module.export {
    getUser,
}
