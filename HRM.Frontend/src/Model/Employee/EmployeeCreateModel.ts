import { Active } from "../Enum/Active.enum"
import { Sex } from "../Enum/Sex.enum"


export interface EmployeeCreateModel {
  id : string
  firstName : string
  middleName : string
  lastName : string
  dob : string
  sex : Sex
  cic : string
  numberPhone : string
  address : string
  salaryID : string
  account : string
  password : string
  active : Active
  urlImage  : string

}
