export class BinaryHabit {
    constructor(
        title = "", desc = "", id = null, isBinned = false, 
        isPinned = false, frequency = null, endDate = null, 
        isRigid = true, isFlexible = false, currentStreak = 0,
        highestStreak = 0) {
        this.title = title;
        this.desc = desc;
        this.id = id;
        this.isBinned = isBinned;
        this.isPinned = isPinned;
        this.frequency = frequency;
        this.endDate = endDate;
        this.isRigid = isRigid;
        this.isFlexible = isFlexible;
        this.currentStreak = currentStreak;
        this.highestStreak = highestStreak;
        
    }
}


export class QuantitativeHabit {
    constructor(
        title = "", desc = "", id = null, isBinned = false, 
        isPinned = false, frequency = null, endDate = null,
        targetAmount = 0, actualAmount = 0, unit = null,
        entries = [], currentStreak = 0, highestStreak = 0) {
            this.title = title;
            this.desc = desc;
            this.id = id;
            this.isBinned = isBinned;
            this.isPinned = isPinned;
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