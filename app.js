$(document).ready(function() {
  //init scrollmagic
  let controller = new ScrollMagic.Controller();

  //build scene
  let myScene = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in')
  .addTo(controller)
});
