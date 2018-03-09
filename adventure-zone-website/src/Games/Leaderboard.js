export default async function getLeaders(game) {
    let theBest = [];

    let ip = 'proj-319-B5.cs.iastate.edu';
    // let ip = '10.36.19.28';

    const response = await fetch('http://' + ip + ':3000/api/leaderboard?game=' + game, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const message = await response.json();

    let leader = JSON.parse(JSON.stringify(await message));
    for (let i = 0; i < leader.length; i++) {
        theBest.push({name: leader[i]['Username'], score: leader[i]['Score']});
    }

    return theBest;
};