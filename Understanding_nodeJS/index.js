const mathlib = require('./math/math');
const quoteslib = require('./quotes/index');

const app = {};
app.config = {
   speed : 1000,
};

app.printQut = function () {
   const allQut = quoteslib.allQut();
   const sz = allQut.length;
   const id = mathlib.generateRandom(1, sz);
   const quote = allQut[id-1];
   console.log(quote);
};

app.infiniteLoop = function() {
   setInterval(app.printQut, app.config.speed);
};

app.infiniteLoop();