$(document).ready(function() {
  //init scrollmagic
  let controller = new ScrollMagic.Controller();

  //pin intro
  let pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '40%'
  })
  .setPin('#intro', {pushFollowers: false})
  .addTo(controller)

  //parallax scene

//   let parallaxTL = new TimelineMax()
//   parallaxTL
//     .from('.content-wrapper', 0.4, {autoAlpha: 0, ease: power0.easeNone}, 0.4)
//     .from('.bcg', 1, {y: '-50', ease: Power0.easeNone}, 0)


  let slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-170', ease: Power0.easeNone}))
  .addTo(controller)

  //loop thru proj elements
  $('.project').each(function() {
    //build scene
    let myScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
    //   duration: '85%',
      triggerHook: 0.8,
      reverse: false
    })
      .setClassToggle(this, 'fade-in')
      .addIndicators()
      .addTo(controller);
  });
});
