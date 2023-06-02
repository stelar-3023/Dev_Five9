function timeToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(":");
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

console.log(timeToSeconds("01:10:20")); // 4220