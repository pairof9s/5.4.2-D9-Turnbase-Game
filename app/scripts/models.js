var $ = require('jquery');


//This is the top level dancer prototype, everything feeds into this
function Dancer(config){
  config = config || {};
  $.extend(this, config);
  this.health = config.health || 60;
  this.name = config.name;
  this.image = config.image;
}

Dancer.prototype.dance = function(victim) {
  var damage = _.random(20);
  victim.health = victim.health - damage;
};

// "Hero" action call ("attack") with Dancer.prototype.dance health calculator
function Hero(config){
  Dancer.call(this, config);
}

Hero.prototype = new Dancer();

// "Enemy" action call ("attack") with Dancer.prototype.dance health calculator
function Enemy(config){
  Dancer.call(this, config);
}

Enemy.prototype = new Dancer();

 module.exports = {
   'Hero': Hero,
   'Enemy': Enemy
};
