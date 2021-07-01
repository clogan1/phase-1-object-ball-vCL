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
const players = playerObject();
const team = Object.values(gameData);
const homePlayers = homeTeam().players;
const awayPlayers = awayTeam().players;

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
    const playerArrays = Object.entries(playerObject())//makes an array of the players
    const playerName = playerArrays.find(playerArray => playerArray[0] === name);
    return playerName[1].shoe;
}

const teamColors = team => {
    if (team === homeTeam().teamName){
        return homeTeam().colors;
    } else {
        return awayTeam().colors;
    }
}

const playerNumbers = team => {
    let teamArray = []

    if (team === homeTeam().teamName){
        for (player in homePlayers) {
            teamArray.push(homePlayers[player].number);

            //homePlayers.reduce(player => )
        }
    } else {
        for (player in awayPlayers) {
            teamArray.push(awayPlayers[player].number);
    }
    return teamArray;
}
}


const playerStats = nameInput => {
    return players[nameInput];
}


const biggestShoe = () => {


}

const bigShoeRebounds = () => {

}