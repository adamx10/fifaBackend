import z from "zod";

const createArbitreValidation = (req, res, next) => {
  const {
    nom,
    prenom,
    nationalite,
    confederation,
    categorie,
    experience,
    statut,
  } = req.body;

  if (
    !nom ||
    !prenom ||
    !nationalite ||
    !confederation ||
    !categorie ||
    experience === undefined ||
    !statut
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  next();
};

const validateAffectation = (req, res, next) => {
  const { matchId, arbitreId, role } = req.body;

  if (!matchId || !arbitreId || !role) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  next();
};

const validateMatch = (req, res, next) => {
  const { date, stade, equipe_domicile, equipe_exterieur, competition, phase } =
    req.body;

  if (
    !date ||
    !stade ||
    !equipe_domicile ||
    !equipe_exterieur ||
    !competition ||
    !phase
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  next();
};

export { createArbitreValidation, validateAffectation, validateMatch };

export const validation = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);

      next();
    } catch (error) {
      const errorStr = JSON.parse(error.message)
      const errors = {}
     
      
      const arr = errorStr?.map(e=>{
        
        errors[e?.path?.[0]] = e.message

        
      })
      

      return res.status(403).json({error:errors})
    }
  };
};



export const registerSchema = z.object({
  name: z.string().min(4),
  email: z.email(),

  password: z.string().min(8).max(32),
  role: z.enum(["admin", "commissaire", "arbitre", "consultation"]),
});
export const loginSchema = z.object({
  email:z.email(),
  password:z.string().min(8)
})