import {User} from "../components/UserFile";

export default async function getLeaders(game) {
    let theBest = [];

    const response = await fetch('http://' + User.getip + ':3000/api/leaderboard?game=' + game, {
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