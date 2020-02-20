import Axios from "axios";

// import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        }, 
        {
            id: 2,
            title: 'Todo two'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
     async fetchTodos({ commit }) {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(res.data);
        commit('setTodos', res.data)
     }
};

const mutations = {
    setTodos: (state, todos) => (state.todos=todos)
};

export default {
    state,
    getters,
    actions,
    mutations
}