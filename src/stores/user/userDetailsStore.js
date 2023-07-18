import {defineStore} from "pinia";


export const useUserDetailsStore = defineStore('userDetailsStore', {
    state() {
        return {
            user: null,
            roles: [
                {id: 1, text: 'Admin'},
                {id: 2, text: 'User'},
            ],
            isLoading: false,
            isSaving: false
        }
    },
    actions: {
        createNewUser() {
            this.user = {
                firstname: 'John',
                lastname: 'Doe',
                email: 'foo@bar.de',
                password: null,
                number_of_children: null,
                permissions: [],
                role_id: null
            };
        },
        loadUser() {
            this.isLoading = true;

            return new Promise((resolve) => {
                setTimeout(() => {
                    this.user = {
                        id: 42,
                        firstname: 'John',
                        lastname: 'Doe',
                        email: 'foobar.de',
                        password: 'secret',
                        number_of_children: 2,
                        permission: []
                    };

                    this.isLoading = false;

                    resolve(this.user);
                }, 2000)
            });
        }
    }
});