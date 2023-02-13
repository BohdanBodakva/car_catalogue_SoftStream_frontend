export class Brand {
  id: number 
  name: string 

  constructor(name: string, id?: number) {
    this.id = 0
    this.name = name

    if (id) {
      this.id = id
    }
    // if(name) {
    //   this.name = name
    // } 
    
  }

}