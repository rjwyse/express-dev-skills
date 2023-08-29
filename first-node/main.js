const daysOfWeek = require('./days-of-week');
const day = daysOfWeek.getWeekday(5);


const random = require('./random');
for (let i = 0; i < 10; i++) {
    console.log(random(100, 200))
}

const circle = require('./circle');
 console.log( circle.area(50) );
 console.log( circle.circumference(75) );