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
        let id = 0;

        if(getters.allTodos.length === 0) {
            id = 0;
        } else {
            id = getters.allTodos[0].id + 1;
        }

        commit('newTodo', { id,
            todo: todo.todo,
            categoryId: todo.categoryId,
            active: todo.active });
    },
    removeTodo({ commit }, id) {
        commit('deleteTodo', id);
    },
    updateTodo({ commit }, updTodo) {
        commit('updateTodo', updTodo);
    }
};

const mutations = {
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) =>
        (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
