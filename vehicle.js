
class Vehicle{
    constructor(color="blue" , n_wheels=4 , horn="beep beep"){
        this.color = color;
        this.n_wheels = n_wheels;
        this.horn = horn;
    }

    honkHorn(){
        console.log(this.horn);
    }
}

export {Vehicle}
