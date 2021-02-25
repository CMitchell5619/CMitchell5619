import ApiPokiController from "./Controllers/ApiPokiController.js";
import MyPokiController from "./Controllers/MyPokiController.js";

class App {
  apiPokiController = new ApiPokiController();
  myPokiController = new MyPokiController();
}

window["app"] = new App();
