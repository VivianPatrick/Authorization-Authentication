const fs = require('fs');


const createUser = (req, res) => {
    const userData = fs.readFileSync('./users/user.json')
    const usersDb = JSON.parse(userData)
    const user = req.body

    usersDb.push(user)

    user.api_key = user.username + user.password

    if (req.body.username === "Vivian") {
        user.role = "admin"

    }
    else {
        user.role = "user"  
    }

    fs.writeFileSync('./users/user.json', JSON.stringify(usersDb, null, 4), (err) => {
        if (err) {
            res.status(500).send('500 Internal Server Error')
        }
        else {
            res.status(201).send('User Created')
        }
    })
    res.status(201).send('User Created')
}
module.exports = {
    createUser
}