// import { Section } from "../models/section";
// import {Student} from "../models/Student";

import { Section,Student,Subject } from "../models/index";
import { StudentService } from "../services/Student.services";


// const sectionId = window.location.hash.substr(1);

//#region En interrogeant la BDD

//const section;
// fetch("./data/sections.json")
//     .then(resp => resp.json())
//     .then(json => {
//         const filteredJson = json.filter(item => item.id == sectionId);
//         const sectionJson = filteredJson.lenght != 0 ? filteredJson[0] : undefined;
//         if(sectionJson){
//             section = new Section(sectionJson);
//             document.querySelector('#pageTitle').innerHTML = document.title = section.getDescription();
//         }
//     });
//#endregion
//#region Avec le localStorage
const sectionJson = JSON.parse(localStorage.getItem('section'));
const section = new Section(sectionJson);
let bip;
document.querySelector('#pageTitle').innerHTML = document.title = section.getDescription();
//#endregion


const studentService =  new StudentService();

let eleveList = await studentService.getAllWhere(eleve => eleve.section_id == section.id);

eleveList = eleveList.sort((a,b) => a.name < b.name ? -1 : 1)

eleveList.forEach(student => {
    // appel de la fonction depuis la classe mère
    // student.test();
    let studentElt = student.getStudentRow();
    studentElt.addEventListener ('click',handleStudentClick.bind(this,student));
    document.querySelector("#listStudent").append(studentElt);
});

//#region Affichage des étudiants
/*
fetch("./data/student.json")
.then(resp => resp.json())
.then(json =>
    {
        // json == on récupère toutes les données du fichiers students en json

        const filteredJson = json.filter(item => item.section_id == section.id  );
        let studentList = filteredJson.map(studentJson =>
            {
                return new Student(studentJson);
            })
       studentList = studentList.sort( (a,b) => a.last_name < b.last_name ? -1 : 1);

       studentList.forEach(student => {
        // appel de la fonction depuis la classe mère
        // student.test();
        let studentElt = student.getStudentRow();
        studentElt.addEventListener ('click',handleStudentClick.bind(this,student));
        document.querySelector("#listStudent").append(studentElt);
       })
       let bo;

    });
*/


function handleStudentClick(student)
{
    localStorage.setItem("student", JSON.stringify(student));
    window.location = "noteDetails.html";
}


let bp;
//#endregion
