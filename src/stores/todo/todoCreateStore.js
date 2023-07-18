import {defineStore} from "pinia";
import {reactive, ref} from "vue";

/*
export const useTodoCreateStore = defineStore('todoCreateStore',  {

    state() {
        return {
            todo: {
                text: null,
                is_done: false,
            },
            isSaving: false
        }
    },
    actions: {
        createTodo() {
            this.todo = {
                text: null,
                is_done: false,
            }
        },
        saveTodo() {
            this.isSaving = true;

            setTimeout(() => {
                console.log('Todo saved');
                this.createTodo();
                this.isSaving = false;
            }, 1000);
        }
    }
});
*/

export const useTodoCreateStore = defineStore('todoCreateStore', () => {

    let todo = ref( {
        text: null,
        is_done: false,
    });

    function createTodo() {
       todo.value = {
           text: null,
           is_done: false,
       };
    }

    return {
        todo,
        createTodo,
    }
});

