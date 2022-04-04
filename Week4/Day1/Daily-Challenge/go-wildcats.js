const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

let usernames = [];
gameInfo.forEach((user) => { usernames.push(user['username']) });

let usersThatScoredAbove5 = [];
gameInfo.forEach((user) => user['score'] > 5 ? usersThatScoredAbove5.push(user) : null);

let totalScore = 0;
gameInfo.forEach( (user) => totalScore += user['score']);
