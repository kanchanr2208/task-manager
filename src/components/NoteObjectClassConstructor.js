export class Note {
    constructor(title = "", desc = "", id = null) {
        this.title = title;
        this.desc = desc;
        this.id = id;
        this.isBinned = false;
        this.isPinned = false;
    }
}