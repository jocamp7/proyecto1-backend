// importamos nuestro modelo User
// y también el Post
const { User, Post } = require('../models/index.js')

const UserController = {

    create(req, res) {
        req.body.role = 'user'
        // usamos el método create de sequelize 
        // que nos hace un insert del usuario
        User.create(req.body)
            .then((user) =>
                res.status(201).send({ message: 'Usuario creado con éxito', user })
            )
            .catch((err) => console.error(err))
    },

    getAll(req, res) {
        User.findAll({ include: [Post] })
            .then((users) => res.send(users))
            .catch((err) => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar las publicaciones',
                })
            })
    },

    // para eliminar usuario y todos sus posts
    async delete(req, res) {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        })
        // borramos los posts que tengan el id de usuario pasado por parámetro
        await Post.destroy({
            where: {
                UserId: req.params.id,
            },
        })
        res.send('El usuario ha sido eliminado con éxito')
    },

    // para actualizar un usuario
    async update(req, res) {
        await User.update(
            { name: req.body.name, email: req.body.email },
            { where: { id: req.params.id } }
        )
        res.send('Usuario actualizado con éxito')
    }


}

module.exports = UserController