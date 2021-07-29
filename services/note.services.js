import { Note } from "../models/index";

export class NoteService
{
    getAll = async() =>
    {
        let json = await fetch('./data/note.json').then(resp => resp.json())
        return json.map(noteJson =>
        {
            return new Note(noteJson);

        })
    }

    getAllWhere = async(where) =>
    {
        let json = await fetch('./data/note.json').then(resp => resp.json())
        return json.filter(where).map(noteJson =>
        {
            return new Note(noteJson);
        })
    }
/** Récupère un étudiant par son Identifiant */
    getById = async(id) =>
    {
        let array = await this.getAllWhere(item => item.id == id)
        return array.length ? array[0] : undefined;
    }
}