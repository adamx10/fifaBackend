import Arbitre from "./arbitre.model.js";
import Match from "./match.model.js";
import Affectation from "./affectation.model.js";



Arbitre.belongsToMany(Match, {
  through: Affectation,
  foreignKey: "arbitreId",
});

Match.belongsToMany(Arbitre, {
  through: Affectation,
  foreignKey: "matchId",
});

Affectation.belongsTo(Arbitre, {
  foreignKey: "arbitreId",
});

Affectation.belongsTo(Match, {
  foreignKey: "matchId",
});

module.exports = {
  Arbitre,
  Match,
  Affectation,
};