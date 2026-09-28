export class Note {
    constructor(title = "", desc = "", id = null, isBinned = false, isPinned = false) {
        this.title = title;
        this.desc = desc;
        this.id = id;
        this.isBinned = isBinned;
        this.isPinned = isPinned;
    }
}