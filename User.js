const router = require("express").Router();
const db = require("../db/dbConnection.js");


router.get('/homess', (req, res)=>{
    const sql ="SELECT * FROM users";
    db.query(sql, (err, result)=>{
        if(err) 
        return res.json({Massage: " error"});
       
        return res.json(result);
    })
})


router.post('/users', (req, res)=>{
    const sql= "INSERT INTO users(`id`,`name`, `email`,`phone`, `status`, `type`) VALUES (?,?,?,?,?,?)";
    const values =[
        //req.body.id,
        req.body.email,
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

router.get('/read/:id', (req, res)=>{
    const sql ="SELECT * FROM users WHERE id=?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) 
        return res.json({Massage: " error"});
       
        return res.json(result);
    })
})

router.put('/update/:id',(req,res)=>{
    const sql= 'UPDATE users SET `email`=?, `password`=?,  `phone`=?, `status`=?,  `type`=?, `name`=? WHERE `id`=? ';
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, req.body.phone, req.body.status, req.body.type, id ],
    (err, result)=>{
        if(err)
        return res.json({Massage: " error"});
       
        return res.json(result);
    
    })

})

router.delete('/delete/:id', (req, res)=>{
    const sql = "DELETE FROM users WHERE id=?"
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err)
        return res.json({Massage: " error"});
       
        return res.json(result);
    })

})
module.exports = router;
