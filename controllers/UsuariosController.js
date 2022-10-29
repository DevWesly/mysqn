const {Usuario} = require('../database/models')

module.exports = {
registrar:(req,res)=>{
    res.send("foi")
    
},
buscar:async(req,res)=>{
    let usuarios = await Usuario.findAll();
    res.send(usuarios);
}
}