import Axios from "axios";
/* eslint-disable */
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
     },
     async addTodo( { commit }, title){
         const res = await Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
         commit('newTodo', res.data)

     },
     async removeTodo({ commit }, id){
         await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
         commit('deleteTodo', id)
     },

     async filterTodos({ commit }, e) {
       const val = Number(e.target.options[event.target.options.selectedIndex].innerText);
       const res = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${val}`);
       commit('setTodos', res.data)
      }
};
 
const mutations = {
    setTodos: (state, todos) => state.todos=todos,
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}