import { Brand } from "./Brand"

export class Car{
    id:number
    description:string 
    brand:Brand 
    currentPrice:number
    model:string  
    color:string 
    engineCapacityInLiters:number 
    
    
  
    constructor(
      brand:Brand,
      model:string,
      color:string,      
      engineCapacityInLiters:number,
      currentPrice:number,
      description:string,
      id?:number){
        
        if(id){
          this.id = id
        } else{
          this.id = 0
        }      
        this.brand = brand
        this.model = model
        this.color = color
        this.engineCapacityInLiters = engineCapacityInLiters
        this.currentPrice = currentPrice
        this.description = description
    }
  }