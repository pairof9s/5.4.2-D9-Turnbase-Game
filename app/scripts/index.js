var $ = require('jquery');
var _ = require('underscore');


var models = require('./models');
var detailTemplate = require('../templates/player-detail.hbs');
var listTemplate = require('../templates/player-list.hbs');

// Wait till DOM is ready
$(function(){
  var favoritePlayer;

console.log('favoritePlayer: ', favoritePlayer);
// console.log(models);

  var hero = [
    new models.Good({name: 'John', image: '../app/images/John.jpg', moves: 'http://yesletsdance.tumblr.com/post/51776966487', 'score': Math.random()}),
    new models.Good({name: 'Michael', image: '../app/images/Michael.jpg', moves: 'http://www.gifbay.com/gif/moonwalk-49226/', 'score': Math.random()}),
    new models.Good({name: 'Madonna', image: '../app/images/Madonna.jpg', moves: 'http://vaguesalvaje.tumblr.com/post/73658595121', 'score': Math.random()})
  ];

  var enemy = [
    new models.Bad({name: 'Chris', image: '../app/images/Chris.jpg', moves: 'http://www.elevenwarriors.com/forum/anything-else/2014/02/33549/best-site-gifs', 'score': Math.random()}),
    new models.Bad({name: 'Napoleon', image: '../app/images/Napoleon.jpg', moves: 'http://forever-sinned.tumblr.com/post/12006410946', 'score': Math.random()}),
    new models.Bad({name: 'Elaine', image: '../app/images/Elain.jpg', moves: 'http://televisionwithoutpity.tumblr.com/post/58744599970/we-will-never-be-tired-of-elaine-dancing-never', 'score': Math.random()})
  ];

  var context = {'hero': hero};
    $('.js-hero').html(listTemplate(context));

    $('.js-hero-select').on('click', function(event){
      event.preventDefault();
      var $myDancerImage = $(this);
      var myDancerName = $myDancerImage.data('name');
      var myDancerPic = $myDancerImage.data('image');
      favoritePlayer = _.filter(hero, {'name': myDancerName, 'image': myDancerPic})[0];
    });

    $('.js-dancer-select').on('click', function(event){
      event.preventDefault();
      if(favoritePlayer){
        alert('My name is ' + favoritePlayer.name + ' and I am ready to dance ' + favoritePlayer.speak());
        window.setTimeout(function(){
          var dancerFace = favoritePlayer.showMyFace('<img src="/images/John.jpg" />');
          alert('Check me out... ' + dancerFace);
        }, 2000);
      }else{
        alert('Select a dancer first');
      }
    });

  });
// creat event trigger here
//
// var John = new Good({'name': 'John', image: '../images/John.jpg', 'score': Math.random()});
// var good2 = new Good({'score': Math.random()});
// var good3 = new Good({'score': Math.random()});
//
// var Chris = new Bad({'name': 'Chris', 'score': Math.random()});
// var bad2 = new Bad({'score': Math.random()});
// var bad3 = new Bad({image: '../images/Elaine.jpg', 'score': Math.random()});
// console.log(John);
//
// console.log(Chris);
// console.log('bad #3', bad3);
//
// });
//
// // console.log(Good);
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
