import { Student } from "../models/index";

export class StudentService
{
    getAll = async() =>
    {
        let json = await fetch('./data/student.json').then(resp => resp.json())
        return json.map(studentJson =>
        {
            return new Student(studentJson);

        })
    }

    getAllWhere = async(where) =>
    {
        let json = await fetch('./data/student.json').then(resp => resp.json())
        return json.filter(where).map(studentJson =>
        {
            return new Section(studentJson);
        })
    }
/** Récupère un étudiant par son Identifiant */
    getById = async(id) =>
    {
        let array = await this.getAllWhere(item => item.id == id)
        return array.length ? array[0] : undefined;
    }




}