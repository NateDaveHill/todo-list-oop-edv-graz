class Todo {
    constructor(id, title, description, priority, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
    }
}