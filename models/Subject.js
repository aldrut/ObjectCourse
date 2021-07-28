import { Model } from "./model";

export class Subject extends Model
{
    // constructor(id,subject)
    // {
        
    //     this.id = id;
    //     this.subject = subject;
        
    // }


    // static IncrementId()
    // {
    //     if(!this.latestId) this.latestId = 1
    //     else this.latestId++
    //     return this.latestId;

    // }

    getSubjectName()
    {
      return this.name;
    }

    getSubjectRow()
    {
      let subjectElt = document.createElement('div');
      subjectElt.setAttribute('class'," col border p-1 studentRow");
      subjectElt.innerHTML =  `<div style="background-color:#CC955E">${this.getSubjectName()}</div>`;
      return subjectElt;
    }
    getNote(value)
    {
      let noteElt = document.createElement('div');
      noteElt.setAttribute('class',"border p-1 studentRow");
      noteElt.innerHTML =  `<div style="background-color:#EDD3ED"><ul><li>${value == null ? "":value}</li></ul></div>`;
      return noteElt;
    }

    getMoyenne(tabValue)
    {
        let moy =0;
        Array.from(tabValue).forEach(x =>
            {
               moy += parseFloat(x);
            } )
            
          moy = parseFloat(moy) /parseFloat(tabValue.length);

             let moyElt = document.createElement('div');
             moyElt.setAttribute('class',"border p-1 studentRow");
             moyElt.innerHTML =  `<div style='background-color:aqua'>Moyenne :  ${moy}</div>`;
            
            return moyElt;

    }

}