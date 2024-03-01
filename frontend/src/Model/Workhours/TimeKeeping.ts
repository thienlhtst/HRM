export interface TimeKeeping {
    employeesID:string,
    lbdid :string
    day:number
    month:number
    year:number
    hourCheckin:number
    minuteCheckin:number
}


export interface CheckOut {
    employeesID: string,
    day: number,
    month: number,
    year: number,
    hourCheckout: number,
    minuteCheckout: number
}

