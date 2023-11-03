class Project {
    constructor(id, name, revenue = 0, isCompleted = false) {
        this.id = id || this._generateId();
        this.name = name;
        this.revenue = revenue;
        this.isCompleted = isCompleted;
    }

    _generateId() {
        return Math.round(Math.random() * 100);
    }
}


export default Project;