export class BinaryHabit {
    constructor(
        title = "", desc = "", id = null, startDate = null, frequency = null, endDate = null, 
        isRigid = true, isFlexible = false, currentStreak = 0, highestStreak = 0, isBinned = false, 
        isPinned = false) {
        this.title = title;
        this.desc = desc;
        this.id = id;
        this.startDate = startDate;
        this.frequency = frequency;
        this.endDate = endDate;
        this.isRigid = isRigid;
        this.isFlexible = isFlexible;
        this.currentStreak = currentStreak;
        this.highestStreak = highestStreak;
        this.isBinned = isBinned;
        this.isPinned = isPinned;
        
    }
}


export class QuantitativeHabit {
    constructor(
        title = "", desc = "", id = null, startDate = null, frequency = null, endDate = null,
        targetAmount = 0, actualAmount = 0, unit = null,
        entries = [], currentStreak = 0, highestStreak = 0,  isBinned = false, 
        isPinned = false) {
            this.title = title;
            this.desc = desc;
            this.id = id;
            this.isBinned = isBinned;
            this.isPinned = isPinned;
            this.startDate = startDate;
            this.frequency = frequency;
            this.endDate = endDate;
            this.targetAmount = targetAmount;
            this.actualAmount = actualAmount;
            this.unit = unit;
            this.entries = entries;
            this.currentStreak = currentStreak;
            this.highestStreak = highestStreak
    }
}