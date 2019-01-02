var fs = require('fs');

fs.writeFileSync('new-vuetify.json', fs.readFileSync('./vuetify.json').toString().replace(/<\/?v-[a-zA-Z-]+/g, function(mached) {
  let upper = true;
  let result = '';
  for (let ch of mached) {
    if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
      result += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = false;
    } else {
      if (ch != '-') {
        result += ch;
      }
      upper = true;
    }
  }
  return result;
}));