
import {Vehicle} from "./vehicle.js"
class Bicyle extends Vehicle{
    constructor(color , n_wheels=2 , horn="honk honk"){
        super(color , n_wheels, horn );
    }
}

export {Bicyle}