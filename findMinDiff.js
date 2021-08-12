/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1
Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0


Constraints:

2 <= timePoints <= 2 * 104
timePoints[i] is in the format "HH:MM".
*/
/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
  let convertedTimePoints = [];
  for (let i = 0; i < timePoints.length; i++) {
      convertedTimePoints.push(convertToNumber(timePoints[i]));
  }
  let minMinDiff= Math.abs(convertedTimePoints[0] - convertedTimePoints[1]);
  while (convertedTimePoints.length > 0) {
      for (let i = convertedTimePoints.length - 2; i > -1; i--) {
          const lastTimepoint = convertedTimePoints[convertedTimePoints.length - 1];
          let currentTimePoint = convertedTimePoints[i];

          if (Math.abs(lastTimepoint - currentTimePoint) < minMinDiff ) {
              minMinDiff = Math.abs(lastTimepoint - currentTimePoint);
          }
          if (Math.abs(lastTimepoint - currentTimePoint) >= 720) {
              if (1440 - Math.abs(lastTimepoint - currentTimePoint) < minMinDiff) {
                  minMinDiff = 1440 - Math.abs(lastTimepoint - currentTimePoint)
              }
          }

      }
      convertedTimePoints.pop();
  }
  return minMinDiff;
};

var convertToNumber = function(str) {
  let tempTime = str.split(':');
  let convertedToMin = Number(tempTime[0]) * 60 + Number(tempTime[1]);
  return convertedToMin;
}

var findMinDifference = function(timePoints) {
    var min = 720; // max difference
    timePoints.forEach((t,i) => { // time in minutes
        [h,m] = t.split(':');
        timePoints[i] = (+h)*60 + (+m);
    });
    timePoints.sort((a,b) => a-b); // ascending order sort
    for(let i = 1; i<timePoints.length; i++){ // compare all consecutive items in the array
        let diff = timePoints[i] - timePoints[i-1];
        diff = diff>720 ? 1440-diff : diff;
        min = diff<min ? diff : min;
    }
    let diff = timePoints[timePoints.length-1] - timePoints[0]; // compare first and last elements
    diff = diff>720 ? 1440-diff : diff;
    min = diff<min ? diff : min;
    return min;
};

console.log(findMinDifference(["23:59","00:00"]))
console.log(findMinDifference(["00:00","23:59","00:00"]))
console.log(findMinDifference(["12:12","00:13"])) //719
console.log(findMinDifference(["00:00","04:00","22:00"])) //120