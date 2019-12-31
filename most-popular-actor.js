// ************************************************************************************
// https://repl.it/@MaxenceBouret/mostPopularActor
// https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDPT+201910_MIAPT/units/2b9ce8e73c8e42fb934b777eeb8ebbb7
// ************************************************************************************

function mostPopularActor(actors) {
  let highestScore = actors[0].popularityScore;
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].popularityScore > highestScore) {
      highestScore = actors[i].popularityScore;
    }
  }
  let mostPopularActor = actors.filter(
    actor => actor.popularityScore === highestScore
  );
  return mostPopularActor[0].name;
}
