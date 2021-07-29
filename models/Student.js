// import { Subject } from "./Subject";
import { Model } from "./model";
export class Student extends Model {
  // constructor(studentJson) {
  //   const {id, last_name, first_name, sections_id} = studentJson;

  //   this._id = id ? id : studentJson._id;
  //   this.last_name = last_name;
  //   this.first_name = first_name;
  //   this._sections_id = sections_id ? sections_id : studentJson.section_id;
  // }

  // get id() {
  //   return this.id;
  // }

  // get sections_id() {
  //   return this.sections_id;
  // }



  getFullName()
  {
    return this.first_name + " " + this.last_name;
  }
getStudentRow()
{
  let studentElt = document.createElement('div');
  studentElt.setAttribute('class',"col border p-1 studentRow sectionCard ");
  studentElt.innerHTML =  `<div class='col d-flex'>${this.getFullName()}</div>`;
  return studentElt;


}




}


