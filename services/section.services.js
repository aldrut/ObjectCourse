import {Section} from '../models/index'

export class SectionService
{
    getAll = async() =>
    {
        let json = await fetch('./data/section.json').then(resp => resp.json())
        return json.map(sectionJson =>
        {
            return new Section(sectionJson);

        })
    }

    getAllWhere = async(where) =>
    {
        let json = await fetch('./data/section.json').then(resp => resp.json())
        return json.filter(where).map(studentJson =>
        {
            return new Section(sectionJson);
        })
    }
/** */
    getById = async(id) =>
    {
        let array = await this.getAllWhere(item => item.id == id)
        return array.length ? array[0] : undefined;
    }




}