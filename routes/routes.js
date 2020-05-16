const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('Hola don Pepito');
});

router.get('/home', (req, res)=> {
    res.send('Hola don Jose');
});
//GET WITH ID
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(req.params.id);
    res.send('Consulta ok');
});

//CREATE
router.post('/', (req, res)=>{
    console.log(req.body.name);
    const {name, salary} = req.body;
    console.log(name);
    res.send('Alta correcta');
});

//DELETE
router.delete('/:id', (req, res)=>{
    console.log(req.params.id);
    const {id} = req.params;
    res.send('Borrado');
});

//UPDATE
router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, salary} = req.body;
    console.log(req.params.id);
       console.log(name);
       res.send('Modificación correcta');
});


module.exports=router;