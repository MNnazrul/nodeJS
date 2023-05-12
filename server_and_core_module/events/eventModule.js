const School = require('./school');

const school = new School();

school.on('bellRing', ({period, text}) => {
   console.log(`WE need to run because ${period} ${text}`);
});

school.startPeriod();


