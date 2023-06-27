// create a new Date object to get the current date and time
const now = new Date();
console.log(now);

// Get the item from localStorage
console.log(localStorage);
let item = localStorage.getItem(
  'f9-chat-console-Rml2ZTkgVEFNIERFTU8gLSBTdGV2ZSBMYXJzZW4=MTI3LjAuMC4xOjU1MDA='
);

// Parse the JSON string
let parsedItem = JSON.parse(item);
console.log(parsedItem);

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
  15,
  0,
  0
);

// create a new Date object for the end of lunch
const endLunch = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  15,
  40,
  0
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

const hideHeader = () => {
  $('.five9-header').hide();
  localStorage.setItem('headerHidden', 'true');
};

const showHeader = () => {
  $('.five9-header').show();
  localStorage.setItem('headerHidden', 'false');
};

const isHeaderHidden = () => {
  return localStorage.getItem('headerHidden') === 'true';
};

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
    15,
    0,
    0
  );
  const endLunch = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    15,
    40,
    0
  );

  const timeUntilRefresh = target.getTime() - now.getTime();
  setTimeout(() => {
    location.reload();
  }, timeUntilRefresh);

  window.addEventListener('beforeunload', () => {
    window.removeEventListener('visibilitychange', hideHeader);
  });

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
      const startTime = new Date(startLunch.getTime());
      const endTime = new Date(endLunch.getTime());

      if (now > startTime && now < endTime) {
        if (!isHeaderHidden()) {
          hideHeader();
        }
      }
    } else {
      showHeader();
    }
    clearInterval(interval); // Stop refreshing once stepKey changes or lunch hours end
  }, 60000); // Refresh every 60 seconds
}

window.addEventListener('load', () => {
  if (isHeaderHidden()) {
    hideHeader();
  } else {
    showHeader();
  }
});

window.addEventListener('beforeunload', () => {
  if (isHeaderHidden()) {
    window.addEventListener('DOMContentLoaded', hideHeader);
  } else {
    window.addEventListener('DOMContentLoaded', showHeader);
  }
});

refreshAt({ hour: 15, minute: 0, second: 5 });
refreshAt({ hour: 15, minute: 40, second: 5 });

