import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

let index = 1;

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.completed === true);
    },
    undoTodos: (state) => {
      return state.todos.filter((todo) => todo.completed !== true);
    },
    finished: (state) => {
      return (
        state.todos.length > 0 &&
        state.todos.every((todo) => todo.completed === true)
      );
    },
    undoCount: (_, gettes) => {
      return gettes.undoTodos.length;
    },
  },
  mutations: {
    addTodo: (state, text) => {
      state.todos = state.todos.concat({ id: index++, text });
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    deleteCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
    },
    toggleTodo: (state, { id, completed }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    },
    toggleAllTodos: (state, completed) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed,
      }));
    },
  },
});

export default store;
