document.title = "Notes - Collège Notre Dame";

let titreGeneral = document.querySelector("#titreGeneral");
titreGeneral.innerText =
  "notes des élèves ~ collège mariette boulogne".toUpperCase();

const d = document;

/**On récupère des données du fichier JSON avec fetch */
let sectionsResponse = fetch("./data/section.json")
  .then(resp => resp.json())
  .then(section => console.log(section));

/**On récupère des données du fichier JSON avec fetch */
let noteResponse = fetch("./data/note.json")
  .then(resp => resp.json())
  .then(note => console.log(note));
/**On récupère des données du fichier JSON avec fetch */
let studentResponse = fetch("./data/student.json")
  .then(resp => resp.json())
  .then(student => console.log(student));
/**On récupère des données du fichier JSON avec fetch */
let subjectResponse = fetch("./data/subject.json")
  .then(resp => resp.json())
  .then(subject => console.log(subject));
/**On crée l'instance de l'objet */

let troisiemeF = new Section(3,"F");

troisiemeF.level;
troisiemeF.name;

let student = new Student();
student.last_name ="DRUT"
student.first_name = "Alexandre";

let note = new Note();

let subject = new Subject();





let bp;
