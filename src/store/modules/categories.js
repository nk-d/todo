const state = {
    categories: []
};

const getters = {
    allCategories(state) {
        return state.categories;
    }
};

const actions = {
    addCategory({ commit, getters }, category) {
        let date = new Date(),
            id = 0;

        if(getters.allCategories.length === 0) {
            id = 0;
        } else {
            id = getters.allCategories[0].id + 1;
        }

        commit('newCategory', { id,
            title: category.title,
            color: category.color,
            date });
    },
    removeCategory({ commit }, id) {
        commit('deleteCategory', id);
    }
};

const mutations = {
    newCategory: (state, todo) => state.categories.unshift(todo),
    deleteCategory: (state, id) =>
        (state.categories = state.categories.filter(category => category.id !== id)),
};

export default {
    state,
    getters,
    actions,
    mutations
};
