let x;
let d = new Date();

//get Date as a string
x = d.toString();

//get timestamp of date as milliseconds
x = d.valueOf();

//Get time (milliseconds since January 1, 1970)
x = d.getTime();

//Get day as a number (1-31)
x = d.getDate();

//Get weekday as a number (0-6)
x = d.getDay();

//Get year as a four digit number (yyyy)
x = d.getFullYear();

//Get month as a number (0-11)
x = d.getMonth()+1;

//Get hour (0-23)
x = d.getHours();

//Get minute (0-59)
x = d.getMinutes();

//Get second (0-59)
x = d.getSeconds();

//Get millisecond (0-999)
x = d.getMilliseconds();

//returns the difference (in minutes) between local time an UTC time
x = d.getTimezoneOffset();

x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = d.toLocaleDateString();
x = d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',

}
);

console.log(x);