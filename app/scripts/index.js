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
      {
      id: 1,
      name: 'John Travolta',
      image: '../app/images/John.jpg',
      moves: '../app/images/John-dance.gif',
      score: Math.random()
    }),
    new models.Hero(
      {
      id: 2,
      name: 'Michael Jackson',
      image: '../app/images/Michael.jpg',
      moves: '../app/images/Michael-dance.gif',
      score: Math.random()
    }),
    new models.Hero(
      {
      id: 3,
      name: 'Madonna',
      image: '../app/images/Madonna.jpg',
      moves: '../app/images/Madonna-dance.gif',
      score: Math.random()
    })
  ];

  var bad = [
    new models.Enemy(
      {
      id: 4,
      name: 'Chris Farley',
      image: '../app/images/Chris.jpg',
      moves: '../app/images/Chris-dance.gif',
      score: Math.random()
    }),
    new models.Enemy(
      {
      id: 5,
      name: 'Napoleon Dynamite',
      image: '../app/images/Napoleon.jpg',
      moves: '../app/images/Napoleon-dance.gif',
      score: Math.random()
    }),
    new models.Enemy(
      {
      id: 6,
      name: 'Elaine Benes',
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
var audio = new Audio('../app/images/applause.mp3');

$('.click-button').click(function() {
    $('.character-' + selectedHero.id).attr('src', selectedHero.moves);
    clickTimes.push(new Date().getTime());
    if (new Date().getTime() - clickTimes[0] < 10000) {
        $('.score').html(function(i, val) {
            return val - Math.floor(Math.random()* -11);

        });
    }
    else {
        $('.score').html("Time's up! We have a winner... ", val);
        clickTimes.length = 0;
        //return alert("Your dancer won...it wasn't even close!!");
        if(alert("Your dancer won...it wasn't even close!!")){}
        else window.location.reload();
    }
    return audio.play();
});
