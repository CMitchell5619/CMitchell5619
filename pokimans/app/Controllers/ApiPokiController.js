import { ProxyState } from "../AppState.js"
import { apiPokiService } from "../Services/ApiPokiService.js"

function _drawApiPokis() {
    let pokis = ProxyState.apiPokis
    console.log(pokis);
    let template = ""
    pokis.forEach(p => template += `<li onclick="app.apiPokiController.setPokiInSights('${p.name}')">${p.name}</li>`)
    document.getElementById('apiPokis').innerHTML = template;

}

function _drawPokiInSights() {
    if (ProxyState.pokiInSights) {
        document.getElementById('pokeinsight').innerHTML = ProxyState.pokiInSights.active
    } else {
        
    }
}

export default class ApiPokiController {

    constructor() {
        console.log('hello from apiPokeController');
        ProxyState.on("apiPokis", _drawApiPokis)
    } 

    setPokiInSights(index) {
        apiPokiService.setPokiInSights(index)
    }

}