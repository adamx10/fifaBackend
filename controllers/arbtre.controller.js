// class ArbitreController {


// async createArbitre (req , res , next){
//   try{
//         const arbitre = await Arbitre.create(req.body)
//         res.status(201).json(arbitre);
//     }catch(err){
//         next(err)
//     }
    
    
   

// };
// async getAllArbitre (req , res , next){
//   try{
//         const getAllArbitre = await Arbitre.findAll();
//         res.status(200).json(getAllArbitre);
//     }catch(err){
//         next(err)
 
// }
// }
// }




// export const arbitreController = new ArbitreController()

// import Arbitre from "../models/arbitre.model";
// exports.createArbitre = async (req , res , next)=>{
  
// };
// exports.getAllArbitre = async (req , res , next)=>{
//     const arbitres = await Arbitre.findAll();//had ster howa SELECT * FROM
//     res.status(200).json()
// }import Arbitre from "../models/arbitre.model";
// exports.createArbitre = async (req , res , next)=>{
//     try{
//         const arbitre = await Arbitre.create(req.body)
//         res.status(201).json(arbitre);
//     }catch(err){
//         next(err)
//     }
// };
// exports.getAllArbitre = async (req , res , next)=>{
//     const arbitres = await Arbitre.findAll();//had ster howa SELECT * FROM
//     res.status(200).json()
// }
import { where } from 'sequelize';
import Arbitres from '../models/arbitre.model.js'

class CreatArbitesController {

    ArbiteGetAll = async (req, res) => {
        try {
            const arbitre = await Arbitres.findAll()
            if (arbitre.length === 0) {
                res.status(404).json({ massege: "not found gutt" });
            }
            res.status(200).json(arbitre);
        } 
            
    catch(err) {
        console.error(err)
    }
    }

    getArbitreById = async (req,res)=>{
       try{
         const arbitre = await Arbitres.findByPk(req.params.id)
         if(!arbitre){
            res.status(404).json({massgae:"error internal" , data:arbitre})
         }
         res.status(200).json({massege:"sucess creating finding by id  ",data:arbitre})
       }
       catch(err){
            console.log(err)
       }
         
    }
    
    createArbitre = async (req,res)=>{
        try{
            const arbitre = await Arbitres.create(req.body)

        if(!arbitre){
            res.status(404).json({massege:"error in arbitre creation"})
        }

        res.status(201).json(arbitre)
        }catch(err){
            console.log(err)
        }
    }

    updateArbitre = async (req,res)=>{
        const findAllAtrbitre =  await  Arbitres.findByPk(req.params.id)

        if(!findAllAtrbitre){
            res.status(404).json({massage:"error  in arbitre updating"})
        }
        await Arbitres.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json(findAllAtrbitre)


    }

deleteArbitre = async (req,res) =>{
    try{
        const arbitre = await Arbitres.findByPk(req.params.id)
        if(!arbitre){
            res.status(404).json({massage:"error in arbitre destroing"})
        }
       await Arbitres.destroy({where:{
        id:req.params.id
       }})
        res.json({massage:"Arbiter deleted successfully"})
    }
    catch(err){
        console.error(err)
    }
}
}




export default new CreatArbitesController();