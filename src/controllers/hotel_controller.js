const Controller = {};
const hotel= require('../hotel.json')

Controller.getAll = (req,res)=>{
    //logica para listar todos los cursos
    res.json(hotel);
}
Controller.create = (req,res)=>{
    //logica para crear un nuevo objeto
    const id= hotel.length+1;
    const newhotel = req.body;
    newhotel["id"]= id; 
    hotel.push(newhotel);
    res.json(newhotel);
}


module.exports = Controller
