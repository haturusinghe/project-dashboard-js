class Project {
    constructor(id, name,revenue = 0, isCompleted = false) {
        this.id = id;
        this.name = name;
        this.revenue = revenue;
        this.isCompleted = isCompleted;
    }
}


export default Project;