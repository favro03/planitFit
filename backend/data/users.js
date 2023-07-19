import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Tracy Favro',
        email:'wetr9902@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Benson Favro',
        email:'benson@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Elsie Favro',
        email:'elsie@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;