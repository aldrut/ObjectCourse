import{Section} from '../models/Section';
import{Note} from '../models/Note';
import{Student} from '../models/Student';
import{Subject} from '../models/Subject';



document.title = "Notes - Collège Notre Dame";


// let titreGeneral = document.querySelector("#titreGeneral");
// titreGeneral.innerHTML = "notes des élèves ~ collège mariette boulogne".toUpperCase();

const d = document;

//#region On récupère les données SECTION du fichier JSON avec fetch puis dans un tableau */
let tabSection = [];
let sectionsResponse = fetch("./data/section.json")
  .then(resp => resp.json())
  .then(sectionList =>
    { 
      
      for(let i=0; i < sectionList.length; i++)
        {
          const sectionJson = sectionList[i];
          const section = new Section(sectionJson.id, sectionJson.level, sectionJson.name)
          tabSection.push(section);
          let htmlElt = `<div class="border text-center p-2 sectionCard m-1">
          <div>${section.level} ème</div>
          <div>${section.name}</div>
          </div>`;
         // d.querySelector('.sectionContainer'+ section.level).innerHTML += htmlElt;
          let bp;
        }
    });
//#endregion

//#region On récupère les données NOTES du fichier JSON avec fetch */
let noteResponse = fetch("./data/note.json")
  .then(resp => resp.json())
  .then(noteList => 
    {
      for(let i=0; i < noteList.length; i++)
        {
          const noteJson = noteList[i];
          const note = new Note(noteJson.id, noteJson.note)
          tabSection.push(note);
          let htmlElt = `<div class="border text-center p-2 sectionCard m-1">
          <div>${note.id} ème</div>
          <div>${note.note}</div>
          </div>`;
         // d.querySelector('.sectionContainer').innerHTML += htmlElt;
          let bp;
        }
    });
//#endregion

//#region On récupère des données ÉTUDIANTS du fichier JSON avec fetch */
  let tabStudent = [];
let studentResponse = fetch("./data/student.json")
  .then(resp => resp.json())
  .then(studentList => 
    {
      for(let i=0; i < studentList.length; i++)
        {
          const studentJson = studentList[i];
          const student = new Student(studentJson.id, studentJson.name, studentJson.first_name,studentJson.sections_id)
          tabStudent.push(student);
          let htmlElt = `<div class="border text-center p-2 sectionCard">
          <div>${student.name} ${student.first_name}</div>
          <div>${student.id}</div>
          </div>`;
         // d.querySelector('.sectionContainer').innerHTML += htmlElt;
          let bp;
        }

  });
//#endregion

//#region On récupère les données MATIERES du fichier JSON avec fetch */
let subjectResponse = fetch("./data/subject.json")
  .then(resp => resp.json())
  .then(subjectList => 
    { for(let i=0; i < subjectList.length; i++)
  {
    const subjectJson = subjectList[i];
    const subject = new Subject(subjectJson.id, subjectJson.subject)
    tabStudent.push(subject);
    let htmlElt = `<div class="border text-center p-2 sectionCard">
    <div>${subject.id} </div>
    <div>${subject.subject}</div>
    </div>`;
    d.querySelector('.sectionContainer').innerHTML += htmlElt;
    let bp;
  }
});
//#endregion
 
//#region On crée l'instance de l'objet */

// let troisiemeF = new Section(3,"F");

// troisiemeF.level;
// troisiemeF.name;

// let tabStudent = [
//    new Student("DRUT","Alexandre"),
//    new Student("BEDU","Laurent"),
//   ];

// let note = new Note();

// let tabSub = [
//    new Subject("MATH"),
//    new Subject("FRANCAIS"),
//    new Subject("ANGLAISsc"),
//    new Subject("ART"),
//    new Subject("SCIENCES"),
//    new Subject("ART"),
//    new Subject("SPORT")];
//#endregion



let bp;
