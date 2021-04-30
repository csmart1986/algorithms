// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// input is string of instructions -> Ex: instructions = "GGLLGG"

function isRobotBounded(instructions) {
    // intialize starting location and direction
    let xCoor = 0;
    let yCoor = 0;
    let currDir = 'N';
    // keep track of what direction robot is facing based on current direction facing and whether it is a left or right turn
    let rDir = {N: 'E', S: 'W', E: 'S', W: 'N'};
    let lDir = {N: 'W', S: 'E', E: 'N', W: 'S'};
    // loop over instructions 
    for (let i = 0; i < instructions.length; i++) {
        const currInstr = instructions[i];
        // need to keep track of movement changes with regards to current direction robot is facing
            // x coor changes by 1 unit with E or W movement, y coor changes by 1 unit with N or S movement
        if (currInstr === 'G') {
            if (currDir === 'N') {
            yCoor++;
            }
            else if (currDir === 'S') {
            yCoor--;
            }
            else if (currDir === 'E') {
            xCoor++;
            }
            else xCoor--;
        };
        // update current direction after making a left of right turn
        if (currInstr === 'R') {
            currDir = rDir[currDir];
        };
        if (currInstr === 'L') {
            currDir = lDir[currDir];
        };
    };
    // if after the repeated sequence of moves, the robot is back to (0,0), we know that the sequence is circular -OR-
    // if the input instructions end with robot facing any direction except N (b/c it starts out facing N), than the sequence is circular
        // if it ends facing N, it will keep moving N when the sequence is repeated and thus will never be able to undo its movement N
    return xCoor === 0 && yCoor === 0 || currDir !== 'N';
};

//isRobotBounded('GGLLGG');
//isRobotBounded('GGLLGG')
isRobotBounded('GL')