export class Car{
  brand;
  model;
  speed = 0;
  isTrunkOpen=false;
  trunkStatus = 'closed';

  constructor(carDetails){
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
  
  displayInfo(){
    console.log(`${this.brand} ${this.model} speed:${this.speed} isTrunkOpen:${this.trunkStatus}`);
  }
  
  go(){
    if(!this.isTrunkOpen){
      if(this.speed<200){
        this.speed += 5;
      }
    }
  }

  brake(){
    if(!this.isTrunkOpen){
      if(this.speed>0){
        this.speed -= 5;
      }
    }
  }

  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
    this.updateTrunkStatus();
  }

  closeTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = flase;
    }
    this.updateTrunkStatus();
  }

  updateTrunkStatus(){
    this.trunkStatus = this.isTrunkOpen? 'open' : 'closed';
  }
}


class RaceCar extends Car{
  acceleration;

  displayInfo(){
    console.log(`${this.brand} ${this.model} acceleration:${this.acceleration}`);
  }

 constructor(raceCarDetails){
    super(raceCarDetails);
    this.acceleration = raceCarDetails.acceleration;
 }



  go(){   
    if(this.speed<300){
      this.speed += this.acceleration;
    }
  }

  brake(){
    if(this.speed>0){
      this.speed -= this.acceleration;
    }
  }

  openTrunk(){
    console.log('Racing Car does not have trunk');
  }

  closeTrunk(){
    console.log('Racing Car does not have trunk');
  }

}




const raceCar = new RaceCar({
  brand : 'Mclaren',
  model : 'F1',
  acceleration : 20
});
raceCar.displayInfo();



const toyota = new Car({
  brand: 'Toyota',
  model: 'Corolla'});
const tesla = new Car({
  brand: 'Tesla',
  model: 'Model3'});


toyota.openTrunk();



tesla.go();
tesla.go();
tesla.go();
toyota.displayInfo();
tesla.displayInfo();