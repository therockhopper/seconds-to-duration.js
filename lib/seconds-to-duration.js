'use strict';
/**
 *
 * ISO 8601 duration format
 *
 * ISO 8601 Durations are expressed using the following format, where (n) is replaced by the value for each of the date and time elements that follow the (n):
 *
 *    P(n)Y(n)M(n)DT(n)H(n)M(n)S
 *
 * Where:
 *
 *   P is the duration designator (referred to as "period"), and is always placed at the beginning of the duration.
 *   Y is the year designator that follows the value for the number of years.
 *   M is the month designator that follows the value for the number of months.
 *   W is the week designator that follows the value for the number of weeks.
 *   D is the day designator that follows the value for the number of days.
 *   T is the time designator that precedes the time components.
 *   H is the hour designator that follows the value for the number of hours.
 *   M is the minute designator that follows the value for the number of minutes.
 *   S is the second designator that follows the value for the number of seconds.
 *
 * For example:
 *
 *   P3Y6M4DT12H30M5S
 *
 * Represents a duration of three years, six months, four days, twelve hours, thirty minutes, and five seconds.
 */

const SECONDS_PER_SECOND = 1;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;

const designations = [
  ['D', SECONDS_PER_DAY],
  ['H', SECONDS_PER_HOUR],
  ['M', SECONDS_PER_MINUTE],
  ['S', SECONDS_PER_SECOND],
];

module.exports = function secondsToDuration(seconds) {
  let duration = 'P';
  let remainder = seconds;

  designations.forEach(([sign, seconds]) => {
    const value = Math.floor(remainder / seconds);

    remainder = remainder % seconds;

    if (value) {
      duration += `${value}${sign}`;
    }
  });

  if (duration == 'P') {
    duration = 'P0S';
  }

  return duration;
}
