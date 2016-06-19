var $ = require('jquery');
var _ = require('underscore');


var models = require('./models');
var detailTemplate = require('../templates/player-detail.hbs');
var listTemplate = require('../templates/player-list.hbs');

// Wait till DOM is ready
$(function(){


// Main characters
  var good = [
    new models.Hero(
      {name: 'John Travolta',
      image: '../app/images/John.jpg',
      moves: 'http://yesletsdance.tumblr.com/post/51776966487',
      score: Math.random()
    }),
    new models.Hero(
      {name: 'Michael Jackson',
      image: '../app/images/Michael.jpg',
      moves: 'http://www.gifbay.com/gif/moonwalk-49226/',
      score: Math.random()
    }),
    new models.Hero(
      {name: 'Madonna',
      image: '../app/images/Madonna.jpg',
      moves: 'http://vaguesalvaje.tumblr.com/post/73658595121',
      score: Math.random()
    })
  ];

  var bad = [
    new models.Enemy(
      {name: 'Chris Farley',
      image: '../app/images/Chris.jpg',
      moves: 'http://www.elevenwarriors.com/forum/anything-else/2014/02/33549/best-site-gifs',
      score: Math.random()
    }),
    new models.Enemy(
      {name: 'Napoleon Dynamite', image: '../app/images/Napoleon.jpg',
      moves: 'http://forever-sinned.tumblr.com/post/12006410946',
      score: Math.random()
    }),
    new models.Enemy(
      {name: 'Elaine Benes',
      image: '../app/images/Elaine.jpg',
      moves: 'http://televisionwithoutpity.tumblr.com/post/58744599970/we-will-never-be-tired-of-elaine-dancing-never',
      score: Math.random()
    })
  ];


  var selectedHero;
  var selectedEnemy;

  var context = {'good' : good};
  $('.hero-select').html(listTemplate(context));
    event.preventDefault();

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
