import { generateId } from "../Utils/generateId.js"



export class Player {
    constructor(name) {
        this.id = generateId()
        this.name = name;
        this.score = 0;
    }
}