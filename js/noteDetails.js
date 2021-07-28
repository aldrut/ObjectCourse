import { Student,Subject, Note } from "../models/index";


const studentJson = JSON.parse(localStorage.getItem('student'));
const student = new Student(studentJson);

document.querySelector('#titleStudent').innerHTML = document.title = student.getFullName();



fetch("./data/subject.json")
  .then((resp) => resp.json())
  .then( x => { 
    let subjectList = x.map(subjectJson =>
        {
            return new Subject(subjectJson);
        }) 
    

  subjectList.forEach(subject=>
        {
            fetch("./data/note.json")
            .then(r => r.json())
            .then(z =>
                {
                    const filteredNoteJson = z.filter(item => item.subject_id == subject.id && item.student_id == student.id );
                    let noteList = filteredNoteJson.map(noteJson =>
                        {
                            return new Note(noteJson);
                            //console.log(new Note(noteJson));
                        }) 
                        let subjectElt =  subject.getSubjectRow()    
                        document.querySelector('#subjectNote').append(subjectElt) 
                       let tabM = [] ; 
                noteList.forEach( item =>
                    {
                       
                        let noteElt =  subject.getNote(item.value) 
                        tabM.push(item.value);
                        document.querySelector('#subjectNote').append(noteElt) 
                        
                       
                    } 
                     )
                     let moyenne = subject.getMoyenne(tabM)
                     document.querySelector('#subjectNote').append(moyenne)    ;
                })  
               
                
                   
        });
         
  })       
      
 

      
