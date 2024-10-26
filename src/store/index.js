import { createStore } from 'vuex';

import cartModule from './cart';

const store = createStore({
  modules: {
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5pqx7prCcq4Hi1DEbGugjYICaPKJisr_1g&s',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    };
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login(context) {
      context.commit('setIsLoggedIn', true);
    },
    logout(context) {
      context.commit('setIsLoggedIn', false);
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    products(state) {
      return state.products;
    },
  },
});

export default store;
