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

}