// create a new Date object to get the current date and time
const now = new Date();

// create a new Date object for the start of lunch
const startLunch = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  11,
  32,
  00
);

// create a new Date object for the end of lunch
const endLunch = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  11,
  33,
  00
);

// format the lunch time range as a string
const lunch = `${startLunch.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})} - ${endLunch.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})}`;

console.log(now);
console.log(lunch);

if (now > startLunch && now < endLunch) {
  $('.five9-header').hide();
}

if (now > endLunch) {
  $('.five9-header').show();
}

function refreshAt(time) {
  const now = new Date();
  const target = new Date();

  // Set the target time to the next occurrence of the provided time
  target.setHours(time.hour);
  target.setMinutes(time.minute);
  target.setSeconds(time.second);

  // If the target time is in the past, add one day to the target time
  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  // Calculate the time remaining until the target time
  const timeUntilRefresh = target.getTime() - now.getTime();

  // Set a timer to refresh the page when the target time is reached
  setTimeout(() => {
    location.reload();
  }, timeUntilRefresh);
}

// Call the refreshAt function with the desired time (24-hour format)
refreshAt({ hour: 11, minute: 32, second: 05 });
refreshAt({ hour: 11, minute: 33, second: 05 });
