import { Section } from "../models/section";
import {Student} from "../models/Student";

// const sectionId = window.location.hash.substr(1);

//#region En interrogeant la BDD

let section;
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
section = new Section(sectionJson);

document.querySelector('#pageTitle').innerHTML = document.title = section.getDescription();
//#endregion

//#region Affichage des étudiants
let student;
let t = fetch("./data/student.json")
.then(resp => resp.json())
.then(json =>
    {
        //json == on récupère toutes les données du fichiers students en json

        const filteredJson = json.filter(item => item.section_id === section._id  );
        // const studentJson = filteredJson.lenght != 0 ? filteredJson[0] : undefined;
        //   if(studentJson){
        //      student = new Student(studentJson);
        //       document.querySelector('#listStudent').innerHTML = student.getFullName();
        //   }
        
        console.log(filteredJson);

    });

let bp;
//#endregion
