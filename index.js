const express = require('express')

const app = express()

// le doy un número distinto a 3000 para evitar conflictos
const PORT = 3003

// conversor
app.use(express.json())

// importamos nuestras rutas de users
app.use('/users', require('./routes/users'))
// importamos nuestras rutas de posts
app.use('/posts', require('./routes/posts'))

app.listen(PORT, () =>
    console.log(`server on ${PORT}`)
)