import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house=> template += house.Template)
    // console.log(template);
    document.getElementById('houses').innerHTML = template
    console.log(ProxyState.houses)
  }

export default class HousesController{
  constructor(){
    _draw()
    ProxyState.on("houses", _draw)
    console.log("hello from the HousesController");
  }

  createHouse(event){
    event.preventDefault();
    console.log('creating house')
    let form = event.target
    console.log(form)
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value
    }
    housesService.createHouse(rawHouse)
  }

  bid(id){
    console.log('bidding ' + id)
    housesService.bid(id)
  }

  deleteHouse(id){
    housesService.deleteHouse(id)
  }

}