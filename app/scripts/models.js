var $ = require('jquery');


//This is the top level dancer prototype, everything feeds into this
function Dancer(config){
  config = config || {};
  $.extend(this, config);
  this.health = config.healt || 60;
  this.name = config.name;
  this.image = config.image;
}

Dancer.prototype.dance = function(victim) {
  var damage = _.random(20);
  victim.health = victim.health - damage;
};

function Hero(config){
  Dancer.call(this, config);
}

Hero.prototype = new Dancer();


function Enemy(config){
  Dancer.call(this, config);
}

Enemy.prototype = new Dancer();

 module.exports = {
   'Hero': Hero,
   'Enemy': Enemy
};


// Code from Kurt whose game is like ours...

// function Fighters(config){
//  config = config || {};
//  $.extend(this, config);
//  this.health = config.health || 60;
//  this.name = config.name;
//  this.image = config.image;
//  //this.battleCry = config.battleCry;
// }
//
// Fighters.prototype.attack = function(victim) {
//  var damage = _.random(20);
//  victim.health = victim.health - damage;
// };
//
//
// function Hero(config){
//  Fighters.call(this, config);
// }
//
// Hero.prototype = new Fighters();
//
// function Enemy(config){
//  Fighters.call(this, config);
// }
//
// Enemy.prototype = new Fighters();
//
//
// module.exports = {
//  'Hero': Hero,
//  'Enemy': Enemy
// };
