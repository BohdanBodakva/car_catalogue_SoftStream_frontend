export class CarPrice {
    id: number
    carId: number
    date: Date
    price: number

    constructor(
        id: number,
        carId: number,
        date: Date,
        price: number
    ) {
        this.id = id
        this.carId = carId
        this.date = date
        this.price = price
    }
}