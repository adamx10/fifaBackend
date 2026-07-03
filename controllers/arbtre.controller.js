import Arbitre from "../models/arbitre.model";
exports.createArbitre = async (req , res , next)=>{
    try{
        const arbitre = await Arbitre.create(req.body)
        res.status(201).json(arbitre);
    }catch(err){
        next(err)
    }
};
exports.getAllArbitre = async (req , res , next)=>{
    const arbitres = await Arbitre.findAll();//had ster howa SELECT * FROM
    res.status(200).json()
}