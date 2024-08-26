export interface WorkHourofEmployee {
  id : string
  employeeID : string
  lbd : string
  day : number
  month : number
  year : number
  hourCheckin : number
  minuteCheckin: number
  hourCheckout : number
  minuteCheckout : number
}

export interface WorkHourStatisticEmployee {
  month : number
  year : number
}
