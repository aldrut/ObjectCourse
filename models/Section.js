import { Model } from "./model"; //pour héritage

export class Section extends Model{
  
  // constructor(sectionJson) {
  //   //destructure
  //   const {id,level, name} = sectionJson;
   
  //   // le underscore pour mettre la valeur en protected quand on fait des getters setters
  //   this._id = id ? id : sectionJson._id;
  //   this._level = level ? level : sectionJson._level;
  //   this._name = name ? name : sectionJson._name;
  // }

  //protéger ID en écriture
//   get id() {
//     return this.id;
//   }

//   get level() {
//     return this._level;
//   }
//   set level(value) {
//     if (value > 6 || value < 3) {
//       value = 6;
//     }
//     this._level = value;
//   }
//   get name(){
//     return this._name;
// }

// set name(value){
//     this._name = value;
// }
  // creation d'une fonction mais pas de mot clé function
  getDescription() {
    return this.level + "ème " + this.name;
  }
  getInnerHTMLForIndex() {
    return `<div>${this.level}ème</div>
  <div>${this.name}</div>`;
  }
  getSectionCard() {
    let sectionElt = document.createElement("div");
    sectionElt.setAttribute("class", "col border text-center p-2 m-2 sectionCard link");
    sectionElt.innerHTML = `<div>${this.level}ème<br>${this.name}</div>`;
    return sectionElt;
  }
}
