import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const App = express ();
App.use(cors());
App.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database:"edaradash",
});

App.get('/homess', (req, res)=>{
    const sql ="SELECT * FROM users";
    db.query(sql, (err, result)=>{
        if(err) 
        return res.json({Massage: " error"});
       
        return res.json(result);
    })
})


App.post('/users', (req, res)=>{
    const sql= "INSERT INTO users( `email`, `password`, `phone`, `status`, `type`, `name`) VALUES (?,?,?,?,?,?)";
    const values =[
        //req.body.id,
        req.body.email,
        req.body.password,
        //req.body.token,
        req.body.phone,
        req.body.status,
        req.body.type,
        req.body.name
    ]
    db.query(sql, values , (err, result)=>{
       if(err) 
       return res.json(err);

        return res.json(result);

    })
})

App.get('/read/:id', (req, res)=>{
    const sql ="SELECT * FROM users WHERE id=?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) 
        return res.json({Massage: " error"});
       
        return res.json(result);
    })
})

App.put('/update/:id',(req,res)=>{
    const sql= 'UPDATE users SET `email`=?, `password`=?,  `phone`=?, `status`=?,  `type`=?, `name`=? WHERE `id`=? ';
    const id = req.params.id;
    db.query(sql, [req.body.email, req.body.password, req.body.phone, req.body.status, req.body.type, req.body.name, id ],
    (err, result)=>{
        if(err)
        return res.json({Massage: " error"});
       
        return res.json(result);
    
    })

})

App.delete('/delete/:id', (req, res)=>{
    const sql = "DELETE FROM users WHERE id=?"
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err)
        return res.json({Massage: " error"});
       
        return res.json(result);
    })

})


App.listen(8081, ()=>{
    console.log("server is running");
});