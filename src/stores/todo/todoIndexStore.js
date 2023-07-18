import {defineStore} from "pinia";
import {ref} from "vue";


export const useIndexTodoStore = defineStore('todoIndexStore', {
    state() {
        return {
            todos: null,
            isLoading: false
        }
    },
    actions: {
        loadTodos() {
            this.isLoading = true;

            return new Promise((resolve) => {
                setTimeout(() => {
                    this.todos = [
                        {id: 1, text: 'Buy milk', is_done: false},
                        {id: 2, text: 'Learn pinia', is_done: true},
                        {id: 3, text: 'Learn more', is_done: false},
                    ];

                    this.isLoading = false;
                    resolve();
                }, 1000)
            })
        }
    }
});

/*
export const useIndexTodoStore = defineStore('indexTodoStore', () => {
    let todos = ref(null);
    let isLoading = ref(false);

    function loadTodos() {
        isLoading.value = true;

        return new Promise((resolve) => {
            setTimeout(() => {
                todos.value = [
                    {id:1, text: 'Buy milk', is_done: false},
                    {id:2, text: 'Learn pinia', is_done: true},
                    {id:3, text: 'Learn more', is_done: false},
                ];
                isLoading.value = false;
                resolve();
            }, 1000)
        })
    }

    return {
        todos,
        isLoading,
        loadTodos
    }
});

*/
