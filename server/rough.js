const bcrypt = require("bcrypt");

const generatePass = async (simplepass) => {
    return await (bcrypt.genSalt(10, async (err, salt) => {
        await bcrypt.hash("abc123", salt, async (err, hashedPass) => {
            if (err) {
                return await err;
            }
            return await hashedPass
        })
    }))
}

console.log(generatePass("abc"))
