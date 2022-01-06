const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('WELCOME TO MY API')
})


//CRUD USUARIO

//GET GENERAL
routes.get('/User', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM usuario', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
//GET ESPECIFICO
routes.get('/User/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM usuario WHERE idusuario = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
//ADD
routes.post('/User', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO usuario set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('User added!')
        })
    })
})
//DELETE ESPECIFICO
routes.delete('/User/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuario WHERE idusuario = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('User excluded!')
        })
    })
})
//DELETE GENERAL
routes.delete('/User', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuario', (err, rows)=>{
            if(err) return res.send(err)
            res.send('User excluded!')
        })
    })
})
//UPDATE GENERAL
routes.put('/User/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE usuario set ? WHERE idusuario = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('User updated!')
        })
    })
})

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//CRUD ORDEN


//GET GENERAL
routes.get('/Order', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM orden', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//GET ESPECIFICO
routes.get('/Order', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM orden', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//INSERTAR
routes.post('/Order', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO orden set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Order added!')
        })
    })
})
//DELETE ESPECIFICO
routes.delete('/Order/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM orden WHERE idorden = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Order excluded!')
        })
    })
})
//DELETE GENERAL
routes.delete('/Order/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM orden', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Order excluded!')
        })
    })
})

//UPDATE GENERAL
routes.put('/Order/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE orden set ? WHERE idorden = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Order updated!')
        })
    })
})


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//CRUD PRODUCTOS

//GET GENERAL
routes.get('/Product', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM productos', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//GET ESPECIFICO
routes.get('/Product', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM productos', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


//INSERTAR
routes.post('/Product', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO productos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Product added!')
        })
    })
})
//DELETE ESPECIFICO
routes.delete('/Product/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM productos WHERE idproductos = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Product excluded!')
        })
    })
})
//DELETE GENERAL
routes.delete('/Product/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM productos WHERE idproductos = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Product excluded!')
        })
    })
})

//UPDATE GENERAL
routes.put('/Product/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE productos set ? WHERE idproductos = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Product updated!')
        })
    })
})


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//CRUD FACTURA

//GET GENERAL
routes.get('/Bill', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM facturas', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//GET ESPECIFICO
routes.get('/Bill', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM facturas', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


//INSERTAR
routes.post('/Bill', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO facturas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Bill added!')
        })
    })
})
//DELETE ESPECIFICO
routes.delete('/Bill/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM facturas WHERE idfacturas = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Bill excluded!')
        })
    })
})
//DELETE GENERAL
routes.delete('/Bill/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM facturas WHERE idfacturas = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Bill excluded!')
        })
    })
})

//UPDATE GENERAL
routes.put('/Bill/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE facturas set ? WHERE idfacturas = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Bill updated!')
        })
    })
})


module.exports=routes