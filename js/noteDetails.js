import { Student,Subject, Note } from "../models/index";
import { StudentService,SubjectService, NoteService } from "../services/base.services";



const studentJson = JSON.parse(localStorage.getItem('student'));
const student = new Student(studentJson);
const subject = new Subject();



document.querySelector('#titleStudent').innerHTML = document.title = student.getFullName();

const subjectService =  new SubjectService();
const noteService =  new NoteService();


let subjectServiceList = await subjectService.getAll();
let noteServiceList = await noteService.getAll();

let obj = {}
subjectServiceList.forEach(m => 
{    
    noteServiceList.forEach( n => 
    {
        if(n.subject_id == m.id)
        obj["matiere"] = m.name;

    }) 
    
});

noteServiceList.forEach(x =>
{
    let subjectElt =  subject.getSubjectRow(x) ;
    document.querySelector('#subjectNote').append(subjectElt) ;
    let bp1;
})
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
      
 

      
