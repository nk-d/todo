const state = {
    categories: []
};

const getters = {
    getCategories(state) {
        return state.categories;
    }
};

const actions = {
    addCategory({ commit, getters }, title, color) {
        let date = new Date(),
            id = 0,
            length = getters.getCategories.length;

        if(length === 0) {
            id = 0;
        } else {
            id = getters.getCategories[length - 1].id + 1;
        }

        // console.log(getters.getCategories, length);

        commit('newCategory', {id, title, color, date});
    }
};

const mutations = {
    newCategory: (state, todo) => state.categories.unshift(todo),
};

export default {
    state,
    getters,
    actions,
    mutations
};
