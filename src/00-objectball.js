const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez" : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
            }

        }
    }
}
}

const gameData = gameObject(); //pulls in the dataset
const players = playerObject(); //pulls object of all playeres
const team = Object.values(gameData); //array of team / away objects
const homePlayers = homeTeam().players; //pulls object of all the home team players
const awayPlayers = awayTeam().players; //pulls object of all the away team players
const playerNameArray = Object.entries(playerObject()); //pulls array of players

function playerObject(){
    return Object.assign({}, homeTeam().players, awayTeam().players);
}

function homeTeam(){
    return gameData.home;
}

function awayTeam() {
    return gameData.away;
}


const numPointsScored = name => {
    // const playerArrays = Object.entries(playerObject())//makes an array of the players
    // const playerName = playerArrays.find(playerArray => playerArray[0] === name);
   // return playerName[1].points;
   return players[name].points;
}


const shoeSize = name => {
    //const playerArrays = Object.entries(playerObject())//makes an array of the players
    //const playerName = playerArrays.find(playerArray => playerArray[0] === name);
    //return playerName[1].shoe;
    return players[name].shoe;
}

const teamColors = team => {
    if (team === homeTeam().teamName){
        return homeTeam().colors;
    } else {
        return awayTeam().colors;
    }
}


const teamNames = () => {
    let teamArray = [];
    for (group of team){ //for...of because team is an array
        teamArray.push(group.teamName);
    }
    return teamArray; 
}


const playerNumbers = teamInput => {
    let teamNumArray = []

    if (teamInput === homeTeam().teamName){
        for (player in homePlayers) {
            teamNumArray.push(homePlayers[player].number);
        }
    } 
    else if (teamInput === AwayTeam().teamName) {
        for (player in awayPlayers) {
            teamNumArray.push(awayPlayers[player].number);
        }
    }
    
    return teamNumArray;
}



const playerStats = nameInput => {
    return players[nameInput];
}


const biggestShoe = () => {
    let bigShoeName;
    let bigShoeSize = 0;

    for (element in players){
        if (players[element].shoe > bigShoeSize){
            bigShoeSize = players[element].shoe;
            bigShoeName = element;
        } 
    }
    return bigShoeName
}

const bigShoeRebounds = nameInput => { //pass biggestShoe as argument
    return players[nameInput].rebounds;
}



const mostPoinstScored = () => {
    let mostPointsName;
    let mostPoints = 0;

    for (element in players){
        if (players[element].points > mostPoints){
            mostPoints = players[element].points;
            mostPointsName = element;
        } 
    }
    return mostPointsName
}


const winningTeam = () => {
//is there a way to use reduce on each team to total points?
//what is the most efficient way to solve this one?

//reduce player.points

    let winnerTeam;
    let homeTotalPoints = 0;
    let awayTotalPoints = 0;


    for(player in homePlayers){
        homeTotalPoints = homePlayers[player].points + homeTotalPoints
    }

    for(player in awayPlayers){
        awayTotalPoints = awayPlayers[player].points + awayTotalPoints
    }

    if(homeTotalPoints > awayTotalPoints) {
        winnerTeam = gameData.home.teamName
    } else {
        winnerTeam = gameData.away.teamName

    }

    return winnerTeam;

}


const playerWithLongestName = () => {
    let longestName;
    let mostChars = 0;

    for (namePlayer of playerNameArray){
        if (namePlayer[0].length > mostChars){
            mostChars = namePlayer[0].length;
            longestName = namePlayer[0];
        } 
    }
    return longestName
}

const mostSteals = () => {
    let mostStealsName;
    let mostSteals = 0;

    for (element in players){
        if (players[element].steals > mostSteals){
            mostSteals = players[element].steals;
            mostStealsName = element;
        } 
    }
    return mostStealsName
}

const doesLongNameStealATon = () => {
    if(playerWithLongestName() === mostSteals()){
        return true
    }
}