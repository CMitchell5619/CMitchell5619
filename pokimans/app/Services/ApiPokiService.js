import { ProxyState } from "../AppState.js"
import Poki from "../Models/Poki.js"
import { pokiApi } from "./AxiosService.js"

class ApiPokeService {
    async setPokiInSights(index) {
        try {
            let res = await pokiApi.get(index)
            console.log(index);
            console.log(res);
            ProxyState.pokiInSights = new Poki(res.data)
            console.log(ProxyState.pokiInSights);
        } catch (error) {
            console.log(error);
        }
    }
    constructor() {
        console.log('HellofromApiPokiService')
        this.getApiPokis()

    }

    async getApiPokis() {
        try {
            const res = await pokiApi.get("")
            console.log(res)
            ProxyState.apiPokis = res.data.results;
        } catch (error) {
            console.error(error)
        }
    }
}

export const apiPokiService = new ApiPokeService();