var $ = require('jquery');
var _ = require('underscore');


var models = require('./models');
var detailTemplate = require('../templates/player-detail.hbs');
var listTemplate = require('../templates/player-list.hbs');
var Good = require('./models').Good;
var Bad = require('./models').Bad;

// Wait till DOM is ready
$(function(){
  var favoritePlayer = 2;

console.log('favoritePlayer: ', favoritePlayer);
// console.log(models);

  var hero = [
    new models.Good({name: 'John', image: ''}),
    new models.Good({name: 'good2', image: ''}),
    new models.Good({name: 'good3', image: ''})
  ];

  var enemy = [
    new models.Bad({name: 'Bad1', image: ''}),
    new models.Bad({name: 'Bad2', image: ''}),
    new models.Bad({name: 'Elaine', image: ''})
  ];
// console.log(enemy);

// creat event trigger here

var John1 = new Good({'score': Math.random()});
var good2 = new Good({'score': Math.random()});
var good3 = new Good({'score': Math.random()});

var bad1 = new Bad({'score': Math.random()});
var bad2 = new Bad({'score': Math.random()});
var bad3 = new Bad({'score': Math.random()});
console.log(John1);

console.log('bad three', bad3);

});

// console.log(Good);
// console.log(Bad);
// for now, just doing a single math.random for winner...this is bonus method
//skill level 1 - 3, 3 is the best
//danceSuit 1-3, 3 is the best
// shoes 1-3, 3 is the best
//
// var good1 = new Good({'skill': '3', 'danceSuit': '3', 'shoes': '3'})
// var good2 = new Good({'skill': '3', 'danceSuit': '2', 'shoes': '2'})
// var good3 = new Good({'skill': '1', 'danceSuit': '1', 'shoes': '3'})
// var bad1 = new Bad({'skill': '2', 'danceSuit': '2', 'shoes': '2'})
// var bad2 = new Bad({'skill': '2', 'danceSuit': '2', 'shoes': '1'})
// var bad3 = new Bad({'skill': '1', 'danceSuit': '1', 'shoes': '1'})


//example
//   var context = {'player': hero};
//   console.log(context);
//   $('.js-player').html(listTemplate(context)); //index.html injects to html
//
//   $('.js-dancing-player').on('click', function(event){  //from player-list.hbs
//     event.preventDefault();
//     var $puppyImage = $(this);
//     var playerName = $puppyImage.data('name');
//     favoritePlayer = _.filter(player, {'name': playerName})[0];
//   });
//
// //this is where the action will happen
//   $('.js-speak').on('click', function(event){
//     event.preventDefault();
//     if(favoritePlayer){
//       alert('My name is ' + favoritePlayer.name + ' and I have a ' + favoritePlayer.speak());
//       window.setTimeout(function(){
//         var toySound = favoritePlayer.playWithToy('squeek');
//         alert('My toy goes ' + toySound);
//       }, 2000);
//     }else{
//       alert('Select a puppy first');
//     }
//   });




//progress bar

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Line(container, {
//   strokeWidth: 4,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: '#FFEA82',   // Text color.
//   trailColor: '#eee',
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//
//       // Default: same as stroke color (options.color)
//       color: '#999',
//       position: 'absolute',
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   from: {color: '#FFEA82'},
//   to: {color: '#ED6A5A'},
//   step: (state, bar) => {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });
//
// bar.animate(1.0);  // Number from 0.0 to 1.0
