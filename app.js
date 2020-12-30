let app = Vue.createApp({
    data() {
        return {
            todo: "",
            todos: [],
            isEditing: false,
            selectedIndex: null,
            storageKey: "save-todo"
        }
    },

    created() {
        this.todos = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    },

    methods: {
        addTodo() {
            if (this.todo == "") {
                this.todos.push = [];
            }else {
                this.todos.push(this.todo);
                this.todo = "";
            }

            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));

        },

        editTodo(index, todo) {
            this.todo = todo;
            this.selectedIndex = index;
            this.isEditing = true;
        },

        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo);
            this.isEditing = false;
            this.todo = "";
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
        },

    }
    
})

app.mount("#app")