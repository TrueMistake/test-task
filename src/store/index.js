import axios from 'axios'

const store = {
    state: {
        products: [],
        selected: '',
        favorites: [],
        category: [],
        filter: ''
    },
    mutations: {
        mutProducts(state, payload) {
            state.products = payload
        },
        changeSelect(state, payload) {
            state.selected = payload
        },
        mutFavorites(state, payload) {
            if (state.favorites.length > 0 &&
                state.favorites.indexOf(payload) !== -1) {
                for (let i = 0; i <= state.favorites.length; i++) {
                    if (state.favorites[i] === payload) {
                        state.favorites.splice(i, 1);
                    }
                }
            } else {
                state.favorites.push(payload);
            }
        },
        filterCategory(state, payload) {
            let cat = []
            payload.forEach(item => cat.push(item.category))
            state.category = [... new Set(cat)]
        },
        mutFilterCategories(state, payload) {
            state.filter = payload
        },
        mutClearFilter(state) {
            state.filter = ''
        }
    },
    actions: {
        async fetchProducts(state) {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                state.commit('mutProducts', response.data)
                state.commit('filterCategory', response.data)
            } catch (e) {
                console.log(e)
            }
        },
        sortCatalog(state, payload) {
            state.commit('changeSelect', payload)
        },
        changeFavorites(state, payload) {
            state.commit('mutFavorites', payload)
        },
        filterCategories(state, payload) {
            state.commit('mutFilterCategories', payload)
        },
        clearFilter(state){
            state.commit('mutClearFilter')
        }
    },
    getters: {
        addFavorite: state => state.favorites,
        getCategory: state => state.category,
        getFilterCategories(state) {
            if (state.selected && state.filter) {
                state.selected === 'priceUp' ? state.products.sort((a, b) => a.price - b.price) : state.products.sort((a, b) => b.price - a.price);
                return state.products.filter(item => item.category === state.filter)
            }

            if (state.selected) {
                return state.selected === 'priceUp' ? state.products.sort((a, b) => a.price - b.price) : state.products.sort((a, b) => b.price - a.price);
            }

            if (state.filter.length) {
                return state.products.filter(item => item.category === state.filter)
            }

            return state.products
        }
    }
}

export default store