import{Section} from '../models/Section';
// import{Note} from '../models/Note';
// import{Student} from '../models/Student';
// import{Subject} from '../models/Subject';
import{SectionService} from '../services/base.services'


document.title = "Notes - Collège Notre Dame";


// let titreGeneral = document.querySelector("#titreGeneral");
// titreGeneral.innerHTML = "notes des élèves ~ collège mariette boulogne".toUpperCase();

const d = document;

//#region On récupère les données SECTION du fichier JSON avec fetch puis dans un tableau */

let tabSection = [];

/**ON INSTANCIE SECTION SERVICES */
const service = new SectionService();

/**ON RECUPERE TOUTES LES SECTIONS DE SECTION.JSON */
/**ON ATTEND UNE REPONSE AVEC await */
let sectionList = await service.getAll();

/**ON TRIE PAR ORDRE ALPHABETIQUE */
sectionList = sectionList.sort((a, b) => (a.name < b.name ? -1 : 1));

/**ON ITERE SUR LE TABLEAU POUR AFFICHER LES DONNEES */
sectionList.forEach((section) => {
  let sectionElt = section.getSectionCard();
  sectionElt.addEventListener("click",handleSectionClick.bind(this, section));
  d.querySelector(".sectionContainer" + section.level).append(sectionElt);
});



// fetch("./data/section.json")
//   .then((resp) => resp.json())
//   .then((json) => {
//     let sectionList = json.map((sectionJson) => {
//       //const { id, level, name } = sectionJson;
//       //return new Section(id, level, name);
//       return new Section(sectionJson); // raccourci pour ne pas repasser les prop en parametres
//     });
//     sectionList = sectionList.sort((a, b) => (a.name < b.name ? -1 : 1));

//     sectionList.forEach((section) => {

//       let sectionElt = section.getSectionCard();
//       //  let sectionElt = d.createElement("div");
//       //  sectionElt.setAttribute("class", "border text-center p-2 sectionCard");
//       //  sectionElt.innerHTML = `<div>${section.level} ème</div>
//       //     <div>${section.name}</div>`;

//       //Ajouter un evt cliquable sur la div
//       sectionElt.addEventListener("click",handleSectionClick.bind(this, section));
//       d.querySelector(".sectionContainer" + section.level).append(sectionElt);
//     });
//   });
  /**Utilisation du localStorage */
    function handleSectionClick(section)
    {
     
      localStorage.setItem("section", JSON.stringify(section));
      window.location = "sectionDetails.html";
      //window.location = "sectionDetail.html#" + section.id;
      
     
      
    }

    // for(let i=0; i < sectionList.length; i++)
    // {
    //   const sectionJson = sectionList[i];
    //   const section = new Section(sectionJson.id, sectionJson.level, sectionJson.name)
    //   tabSection.push(section);
    //   let htmlElt = `<div class="border text-center p-2 sectionCard m-1">
    //   <div>${section.level} ème</div>
    //   <div>${section.name}</div>
    //   </div>`;
    //   d.querySelector('.sectionContainer'+ section.level).innerHTML += htmlElt;
    //   let bp;
    // }
//#endregion



let bp;
