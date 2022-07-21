import pool from '../configs/connectDB'

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`')

    return res.render('index.ejs', { dataUser: rows })
};

let getDetailPage = async (req, res) => {

    const [user] = await pool.execute(`SELECT * FROM users where id = ?`, [req.params.userId])

    return res.render('detail.ejs', { userDetail: user[0] })
};

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)', [firstName, lastName, email, address])
    return res.redirect('/')
};

let deleteUser = async (req, res) => {
    let { userId } = req.body
    await pool.execute('DELETE FROM users WHERE id = ?', [userId])
    return res.redirect('/')
};

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address ,userId } = req.body
    await pool.execute('UPDATE users SET firstName=? , lastName=? , email=? , address=? where id=?', [firstName, lastName, email, address, userId])
    return res.redirect('/')
};

module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    updateUser
}