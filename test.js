$ = require("jquery");
fs = require("fs");
fs.readFile("projects/player.js", function(err, data) {
  eval(data);
})
fs.readFile("projects/editor.js", function(err, data) {
  eval(data);
})
