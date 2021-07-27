export class Section {
  constructor(id, level, name) {
    this._id = id;
    // le underscore pour mettre la valeur en protected quand on fait des getters setters
    this._level = level;
    this.name = name;
  }

  //protéger ID en écriture
  get id() {
    return this.id;
  }

  get level() {
    return this._level;
  }
  set level(value) {
    if (value > 6 || value < 3) {
      value = 6;
    }
    this._level = value;
  }
  // creation d'une fonction mais pas de mot clé function
  getDescription() {
    return this.level + "ème " + this.name;
  }
  getInnerHTMLForIndex() {
    return `<div>${this.level}ème</div>
  <div>${this.name}</div>`;
  }
  getSectionCard() {
    let sectionElt = d.createElement("div");
    sectionElt.setAttribute("class", "border text-center p-2 sectionCard");
    sectionElt.innerHTML = `<div>${this.level}ème</div><div>${this.name}</div>`;
    return sectionElt;
  }
}
