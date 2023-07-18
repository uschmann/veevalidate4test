import {ref} from "vue";

let counter = ref(1);

export default function useCountStore() {

    function increment() {
        counter.value ++;
    }

    function decrement() {
        counter.value --;
    }

    function setCounter(counter) {
        counter.value = counter;
    }

    return {
        counter,
        setCounter,
        increment,
        decrement,
    };
}