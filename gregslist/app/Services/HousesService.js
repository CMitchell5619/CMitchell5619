import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async deleteHouse(id) {
            try {
                const res = await api.delete(`houses/${id}`)
                this.getHouses()
            } catch (error) {
              console.error(error)
            }
          }

    bid(id) {
        throw new Error("Method not implemented.");
    }

 async createHouse(rawHouse) {
        try {
     await api.post('houses', rawHouse)
     this.getHouses()
     } catch (error) {
     console.error(error)
     }
    }
    constructor() {
        console.log("hello from Houses Service");
        this.getHouses()
    }

    async getHouses() {
        try {
          const res = await api.get('houses')
          console.log('help!');
          ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
          console.log(ProxyState.houses);
        } catch (error) {
          console.error(error)
        }
      }
}

export const housesService = new HousesService()