import pool from '../configs/connectDB'

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM users")
    return res.status(200).json(
        {
            message: 'Success',
            data: rows
        }
    )
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'Create User Fail , Missing Required Params'
        })
    }
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)', [firstName, lastName, email, address])

    return res.status(200).json({
        message: 'Create User Success',
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
        }
    })
}


module.exports = {
    getAllUsers,
    createNewUser
}