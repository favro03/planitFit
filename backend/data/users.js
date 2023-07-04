import bcrypt from 'bcryptjs'

const users = [
    {
        userName: 'Tracy Favro',
        email: 'wetr9902@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        userName: 'foodie',
        email: 'sweettooth@exampe.com',
        password: bcrypt.hashSync('123456',10),
       
    },
    {
        userName: 'sweettooth',
        email: 'sweettooth@example.com',
        password: bcrypt.hashSync('123456',10),
     
    },
    {
        userName: 'whatsForDesart',
        email: 'whatsForDesart@example.com',
        password: bcrypt.hashSync('123456',10),
    
    },
    {
        userName: 'butterFeind',
        email: 'butterFeind@example.com',
        password: bcrypt.hashSync('123456',10),

    },
    
]

export default users