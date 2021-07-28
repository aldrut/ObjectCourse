import { Model } from "./model";
export class Note extends Model {
  // constructor(id, note) {
  //   (this.id = id), (this.note = note);
  // }


  getNoteRow()
    {
      let noteElt = document.createElement('div');
      noteElt.setAttribute('class',"border p-1 studentRow");
      noteElt.innerHTML =  `<div>${this.value}</div>`;
      return noteElt;
    
    
    }

}
