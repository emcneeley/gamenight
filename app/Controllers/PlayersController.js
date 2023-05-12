import { appState } from "../AppState.js";
// import { playersService } from "../Services/PlayersService.js";
// import { Pop } from "../Utils/Pop.js";
// import { setHTML } from "../Utils/Writer.js";


function drawPlayers() {

    let template = ''

    appState.players.forEach(player => {
        template += `
         <div id="app">
                ${player.name} - ${player.score}
              </div>
        `
    })
    document.getElementById('app').innerHTML = template

}

function drawScore() {
    appState.players.forEach(player => {
        player.score += 10
    })
}

export class PlayersController {
    constructor() {
        console.log('Hello from Players Controller', appState.players)
        drawPlayers()
        drawScore()
    }

}