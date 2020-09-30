
(function (window) {

var names = ["Suraj", "Uthpala", "Thejas", "Raksha", "Vijetha", "Vikas", "Jayanth", "Prapthi", "Jayesh", "Jacquline"];
for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);