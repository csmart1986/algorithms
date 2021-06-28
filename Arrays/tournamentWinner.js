// create teams obj = { team name: total score }
// create a max score 

// Iterate over competitions nested array AND result array
  // competitions = [ [ home, away ] ]
    // grab idx 0 if home and idx 1 if away

// for each comp, check if score is 0 or 1

  // check to see if team is already in team obj
  // if it isn't, add it as a key
  // if result score is 1, 
    // increment score of HOME team in teams obj +3
  // if result score is 0, increment AWAY team score +3
  // ressign max score as needed

// after iterating over all comps and results, look up team w/max score
 
function tournamentWinner(competitions, results) {
  let teams = {};
  let maxScore = 0;

  for (let i = 0; i < competitions.length; i++) {
    const currMatch = competitions[i];
    const [home, away] = currMatch;
    const currScore = results[i];
    // AWAY team wins
    if (currScore === 0) {
      if (!teams[away]) teams[away] = 3;
      else teams[away] += 3;  

      maxScore = Math.max(maxScore, teams[away]);
    }
    // HOME team wins
    else {
      if (!teams[home]) teams[home] = 3;
      else teams[home] += 3;

      maxScore = Math.max(maxScore, teams[home]);
    }
  }

  for (let team in teams) {
    if (teams[team] === maxScore) {
      return team
    }
  }
}

console.log(tournamentWinner([['HTML', 'C'], ['C', 'Python'], ['Python', 'HTML']], [0,0,1]))