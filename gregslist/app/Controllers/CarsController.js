import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

  function _draw(){
    let cars = ProxyState.cars
    let template = ""
    cars.forEach(car=> template += car.Template)
    // console.log(template);
    document.getElementById('cars').innerHTML = template
    console.log(ProxyState.cars)
  }

export default class CarsController{
  constructor(){
    _draw()
    ProxyState.on("cars", _draw)
  }

  createCar(event){
    event.preventDefault();
    console.log('creating car')
    let form = event.target
    console.log(form)
    let rawCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    carsService.createCar(rawCar)
  }

  bid(id){
    console.log('bidding ' + id)
    carsService.bid(id)
  }

  deleteCar(id){
    carsService.deleteCar(id)
  }

}