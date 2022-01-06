//CONFIGURACIONES INICIALES -----------------------------
const express = require('express')
const mysql = require('mysql')
const mycon = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT||9000)
const dbOptions={
    host: 'localhost',
    port: 3306,
    user:'root',
    password: '23112001',
    database: 'soul_db'
}

const routes=require('./EstablecimientoRoutes')


//MIDLEWARES----------------------------------------------
app.use(mycon(mysql,dbOptions,'single'))



//APARTADO DE RUTAS--------------------------------------
app.listen(app.get('port'),()=>{
    console.log('serverrunning on port', app.get('port'))
})


app.use('/',routes)



app.get('/api')
