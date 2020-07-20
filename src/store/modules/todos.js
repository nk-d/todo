const state = {
    todos: []
};

const getters = {
    allTodos(state) {
        return state.todos;
    }
};

const actions = {
    addTodo({ commit, getters }, todo) {
        let date = new Date(),
            id = 0;

        if(getters.allTodos.length === 0) {
            id = 0;
        } else {
            id = getters.allTodos[0].id + 1;
        }

        commit('newTodo', { id,
            todo: todo.todo,
            categoryId: todo.categoryId,
            date });
    },
    removeTodo({ commit }, id) {
        commit('deleteTodo', id);
    }
};

const mutations = {
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) =>
        (state.todos = state.todos.filter(todo => todo.id !== id)),
};

export default {
    state,
    getters,
    actions,
    mutations
};
