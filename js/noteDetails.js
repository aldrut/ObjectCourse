import { Student, Subject, Note } from "../models/index";
import {
  StudentService,
  SubjectService,
  NoteService,
} from "../services/base.services";

const studentJson = JSON.parse(localStorage.getItem("student"));
const student = new Student(studentJson);
const subject = new Subject();

document.querySelector("#titleStudent").innerHTML = document.title =
  student.getFullName();

const subjectService = new SubjectService();
const noteService = new NoteService();

let subjectServiceList = await subjectService.getAll();
let noteServiceList = await noteService.getAllWhere(
  (item) => item.student_id == student.id
);

let obj = [];
subjectServiceList.forEach((matiere) => {
  obj.push(matiere.name);
  noteServiceList.forEach((note) => {
    if (note.subject_id == matiere.id) obj.push(note.value);
  });
});

for (let i = 0; i < obj.length; i++) {
  if (isNaN(parseFloat(obj[i]))) {
    let subjectElt = subject.getSubjectRow(obj[i]);
    document.querySelector("#subjectNote").append(subjectElt);
  } else {
    let noteElt = subject.getNote(obj[i]);
    document.querySelector("#subjectNote").append(noteElt);
  }
  let moyenne = subject.getMoyenne(obj);
  document.querySelector("#subjectNote").append(moyenne);
}
let bp;

// fetch("./data/subject.json")
//   .then((resp) => resp.json())
//   .then( x => {
//     let subjectList = x.map(subjectJson =>
//         {
//             return new Subject(subjectJson);
//         })

//   subjectList.forEach(subject=>
//         {
//             fetch("./data/note.json")
//             .then(r => r.json())
//             .then(z =>
//                 {
//                     const filteredNoteJson = z.filter(item => item.subject_id == subject.id && item.student_id == student.id );
//                     let noteList = filteredNoteJson.map(noteJson =>
//                         {
//                             return new Note(noteJson);
//                             //console.log(new Note(noteJson));
//                         })
//                         let subjectElt =  subject.getSubjectRow()
//                         document.querySelector('#subjectNote').append(subjectElt)
//                        let tabM = [] ;
//                 noteList.forEach( item =>
//                     {

//                         let noteElt =  subject.getNote(item.value)
//                         tabM.push(item.value);
//                         document.querySelector('#subjectNote').append(noteElt)

//                     }
//                      )
//                      let moyenne = subject.getMoyenne(tabM)
//                      document.querySelector('#subjectNote').append(moyenne)    ;
//                 })

//         });

//   })
