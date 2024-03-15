export interface HomelistLabour {
    id: string, 
    name: string, 
    factor: number,
    days:DayinList[]
}
export interface DayinList {
    id: string, 
    idlb: string, 
    name: string, 
    days: number,
    months:number
}