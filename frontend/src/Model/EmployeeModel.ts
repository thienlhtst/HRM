import { Active } from "./Enum/Active.enum"
import { Sex } from "./Enum/Sex.enum"

export interface EmployeeModel {
  id : string
  firstname : string
  middlename : string
  lastname : string
  dob : Date
  sex : Sex
  cic : string
  number : string
  address : string
  rankid : string
  positionid : string
  account : string
  password : string
  active : Active
  urlimage : string

}
