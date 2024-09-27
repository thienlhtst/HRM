import { Active } from "../Enum/Active.enum"
import { Sex } from "../Enum/Sex.enum"

export interface EmployeeModel {
  id : string
  firstName : string
  middleName : string
  lastName : string
  dob : string
  sex : Sex
  cic : string
  numberPhone : string
  email : string
  address : string
  position : string
  rank : string
  account : string
  password : string
  active : Active
  urlImage  : string

}
