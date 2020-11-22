import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Diego Zegarra',
        email: 'diego@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mary Poppins',
        email: 'poppins@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users