// create a new Date object to get the current date and time
const now = new Date();
console.log(now);
// Get the item from localStorage
console.log(localStorage);
let item = localStorage.getItem(
  'f9-chat-console-Rml2ZTkgVEFNIERFTU8gLSBTdGV2ZSBMYXJzZW4=MTI3LjAuMC4xOjU1MDA='
);
// console.log(item);
// Parse the JSON string
let parsedItem = JSON.parse(item);
console.log(parsedItem);
// console.log(parsedItem.session.id);
// Access the compositeKey
let sessionKey = parsedItem.session.id;
console.log(sessionKey);
let stepKey = parsedItem.step;
console.log(stepKey);
// create a new Date object for the start of lunch
const startLunch = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  10,
  15,
  00
);
// create a new Date object for the end of lunch
const endLunch = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  10,
  20,
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

function refreshAt(time) {
  const now = new Date();
  const target = new Date();
  target.setHours(time.hour);
  target.setMinutes(time.minute);
  target.setSeconds(time.second);
  if (target.getTime() < now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  const startLunch = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    10,
    15,
    0
  );
  const endLunch = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    10,
    20,
    0
  );

  const timeUntilRefresh = target.getTime() - now.getTime();
  setTimeout(() => {
    location.reload();
  }, timeUntilRefresh);

  const interval = setInterval(function () {
    const now = new Date(); // Update the value of now inside setInterval
    const stepKey = parsedItem.step; // Retrieve the updated value of stepKey

    if (stepKey === 'Conversation' && now > startLunch && now < endLunch) {
      // Continue refreshing every 60 seconds until stepKey changes or lunch hours end
      location.reload();
    } else if (
      stepKey !== 'Conversation' &&
      now > startLunch &&
      now < endLunch
    ) {
      $('.five9-header').hide();
      clearInterval(interval); // Stop refreshing once stepKey changes or lunch hours end
    }
  }, 60000); // Refresh every 60 seconds
}

refreshAt({ hour: 10, minute: 15, second: 5 });
refreshAt({ hour: 10, minute: 20, second: 5 });
