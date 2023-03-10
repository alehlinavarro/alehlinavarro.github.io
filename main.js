let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' <span style="color: #2099d8"> Community manager y desarrolladora web')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  