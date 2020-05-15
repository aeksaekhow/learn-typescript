export class Project {

    private readonly _title: string
    private readonly _description: string
    private readonly _peopleAmount: number

    constructor(title: string, description: string, peopleAmount: number) {
        this._title = title
        this._description = description
        this._peopleAmount = peopleAmount
    }

    public get title() {
        return this._title
    }

    public get description() {
        return this._description
    }

    public get peopleAmount() {
        return this._peopleAmount
    }

}