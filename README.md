# ReactJS-XOGame
This game is written using ReactJS. Algorithm for determining winner is developed in a more unique way and included here as a note

#ALGORITHM FOR DETERMINING WINNER
The Algorithm for determining winner could be of more interest to those knowledgable in REACTJS that is why i choose to explain more
on it first
To Determine Winner
1. Create the GameChart object which consist of the numbers that make up wins for every position in the Tic-Tac-To game i.e
2. const gameChart = {
    0: [[0, 1, 2], [0, 3, 6], [0, 4, 8]],
    1: [[1, 4, 7], [1, 0, 2]],
    2: [[2, 5, 8], [2, 4, 6], [2, 1, 0]],
    3: [[3, 4, 5], [3, 0, 6]],
    4: [[4, 1, 7], [4, 6, 2],[4,0,8]],
    5: [[5, 2, 8], [5, 4, 3]],
    6: [[6, 7, 8], [6, 4, 2], [6, 3, 0]],
    7: [[7, 4, 1], [7, 6, 8]],
    8: [[8, 5, 2], [8, 4, 0], [8, 7, 6]]
}
3. with this chart, go ahead to determing the recent play each time by each user i.e recent play for X and for O player
4. having gotten the recent play, mark out the gameChart for such recent play each time it populates
5. use the Include method to determine wether each number from every wins of the GameChart being mapped out matches or is included
   in the populated plays for each of X and O player
6. make counts as you decide this
7. it the array which now consist of each counts of trues based on the condition has 3 in it,
8. Decide win for the corresponding X or O as the case may be

** check out CheckXStatus(play_x) and CheckOStatus(play_o) for more insight

# Clone the Project
1. git clone https://github.com/sterlingking1990/ReactJS-XOGame.git
2. yarn install
3. yarn add babel-react@latest babel-env@latest

# Run the project
on dir ReactJS-XOGame run
1. babel jsxscripts/game.js --out-file=public/reactjs/app.js --watch
2. live-server public

# Important
1. make sure you [yarn global add babel-cli@latest] to enable babel command line if you do not have babel

# Experience
1. console.log(["0"]*1) gives [0]



