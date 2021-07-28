/**
 * class mère pour créer nos modeles
 * mutualiser propriété et méthode commune
 * 
 */



export class Model{

    constructor(jsonObject)
    {
        Object.assign(this,jsonObject);
    }
 
    test()
    {
        console.log("classe mere");
    }
}