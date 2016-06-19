var $ = require('jquery');
var _ = require('underscore');


var models = require('./models');
//var detailTemplate = require('../templates/player-detail.hbs');
var detailTemplate = require('../templates/player-move.hbs');
var listTemplate = require('../templates/player-list.hbs');

// Wait till DOM is ready
$(function(){


// Main characters
  var good = [
    new models.Hero(
      {name: 'John Travolta',
      image: '../app/images/John.jpg',
      moves: '../app/images/John-dance.gif',
      score: Math.random()
    }),
    new models.Hero(
      {name: 'Michael Jackson',
      image: '../app/images/Michael.jpg',
      moves: '../app/images/Michael-dance.gif',
      score: Math.random()
    }),
    new models.Hero(
      {name: 'Madonna',
      image: '../app/images/Madonna.jpg',
      moves: '../app/images/Madonna-dance.gif',
      score: Math.random()
    })
  ];

  var bad = [
    new models.Enemy(
      {name: 'Chris Farley',
      image: '../app/images/Chris.jpg',
      moves: '../app/images/Chris-dance.gif',
      score: Math.random()
    }),
    new models.Enemy(
      {name: 'Napoleon Dynamite', image: '../app/images/Napoleon.jpg',
      moves: '../app/images/Napoleon-dance.gif',
      score: Math.random()
    }),
    new models.Enemy(
      {name: 'Elaine Benes',
      image: '../app/images/Elaine.jpg',
      moves: '../app/images/Elaine-dance.gif',
      score: Math.random()
    })
  ];

// Character "Hero" seclection and "Enemy" random selection
  var selectedHero;
  var selectedEnemy;

  var context = {'good' : good};
  $('.hero-select').html(listTemplate(context));

  $('.form-control').on('change', function(event){
    event.preventDefault();

  var goodCharacter = $(this);
  var characterIndex = goodCharacter.val();

  selectedHero = good[characterIndex];
  selectedEnemy = selectEnemy();

  $('.js-contestants')
    .html(detailTemplate(selectedHero))
    .append(detailTemplate(selectedEnemy));

  });

  function selectEnemy(){
    var randomEnemyIndex = Math.floor(Math.random() * 3);
    return bad[randomEnemyIndex];
  }

});


// $('#boogie-button').click(function(val){
//  if (Math.random(val) >= 65){
//    alert("They got some mooooooooves");
//  }
// });
//
//
// $('.boogie-button').click(function() {
//    $('.score').html(function(i, val) {return val - Math.floor(Math.random()* -11);});
// });

var clickTimes = [];

$('.click-button').click(function() {
    clickTimes.push(new Date().getTime());
    if (new Date().getTime() - clickTimes[0] < 10000) {
        $('.score').html(function(i, val) {
            return val - Math.floor(Math.random()* -11);
        });
    }
    else {
        $(".score").html("Time's up! We have a winner...");
        clickTimes.length = 0;
        return alert("Your dancer won...it wasn't even close!!");
    }

});
