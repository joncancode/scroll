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
