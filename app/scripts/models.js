var $ = require('jquery');
// this is where we create out constructors

// This will "call" the action function
function Dancer (config){
  config = config || {};
}

//This is the top level dancer prototype, everything feeds into this
function Good(config){
  config = config || {};
  $.extend(this, config);
  this.hasMoves = true;
}

Good.prototype = new Dancer();
Good.prototype.goodMoves = function(){
  return "gulp";
};

function Bad(config){
  config = config || {};
  $.extend(this, config);
  this.hasMoves = true;
}

Bad.prototype = new Dancer();
Bad.prototype.discoMoves = function(){
  return "yell";
};

 module.exports = {
   Good: Good,
   Bad: Bad
};
// function Kitten(config){
//   CuteAnimals.call(this, config);
// }
// Kitten.prototype = new CuteAnimals();
// Kitten.prototype.pur = function(){
//   return 'purrrrrRrrrrRrrrr';
// };

// function goodMoves(config){
//   player.call(this, config);
//
// }

//
// Better.prototype.betterMoves =
//
// // Example code
// function CuteAnimals(config){
//   config = config || {};
//   $.extend(this, config);
//   this.isCute = true;
// }
// CuteAnimals.prototype.bigEyes = true;
// CuteAnimals.prototype.playWithToy = function(sound){
//   return sound + ', ' + sound;
// };
//
// function Puppy(config){
//   CuteAnimals.call(this, config);
// }
// Puppy.prototype = new CuteAnimals();
// Puppy.prototype.speak = function(){
//   return 'tiny bark';
// };
//
// function Kitten(config){
//   CuteAnimals.call(this, config);
// }
// Kitten.prototype = new CuteAnimals();
// Kitten.prototype.pur = function(){
//   return 'purrrrrRrrrrRrrrr';
// };
//
// module.exports = {
//   'player': Puppy,
//   'enemy': Kitten
// };
