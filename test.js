coveralls = require("coveralls");
$ = require("jquery");
fs = require("fs");
coveralls.wear();
fs.readFile("projects/player.js", function(err, data) {
  eval(data);
})
fs.readFile("projects/editor.js", function(err, data) {
  eval(data);
})
