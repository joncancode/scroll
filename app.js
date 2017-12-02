$(document).ready(function() {
  //init scrollmagic
  let controller = new ScrollMagic.Controller();

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
