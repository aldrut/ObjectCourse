export class Subject
{
    constructor(id,subject)
    {
        
        this.id = id;
        this.subject = subject;
        
    }


    static IncrementId()
    {
        if(!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId;

    }



}