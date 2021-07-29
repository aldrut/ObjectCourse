import {Subject} from '../models/index'

export class SubjectService
{
    getAll = async() =>
    {
        let json = await fetch('./data/subject.json').then(resp => resp.json())
        return json.map(subjectJson =>
        {
            return new Subject(subjectJson);
        })
    }

    getAllWhere = async(where) =>
    {
        let json = await fetch('./data/subject.json').then(resp => resp.json())
        return json.filter(where).map(subjectJson =>
        {
            return new Subject(subjectJson);
        })
    }





}