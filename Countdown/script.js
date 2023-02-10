const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate= new Date(2023, 3, 25, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay+10, 11,30,0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();
console.log(date)
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
console.log(`weekday ${weekday}`)

let month = futureDate.getMonth();
month = months[month];
console.log(month)

let day = futureDate.getDay();
day = weekdays[day];
console.log(day)

giveaway.textContent=`giveaway ends on ${weekday} ${day}, ${date} ${month} ${year} ${hour}:${minute} am`;

const futureTime = futureDate.getTime();

function getRemainingTime (){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(t/oneDay);
  let hour = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour)/ oneMinute);
  let second = Math.floor((t%oneMinute)/1000);

  const value = [days,hour,minutes,second];

  function format (item){
    if(item < 10){
      return (item=`0${item}`);
    }
    else{
      return item;
    }
  }

  items.forEach(function (item, index){
    item.innerHTML = format(value[index]);
  });

  if(t<0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();