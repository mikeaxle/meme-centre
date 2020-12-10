import Meme from '@/models/Meme'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    memes: Array<Meme>()
  },
  getters: {
  },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('store')) {
        
        if(localStorage.getItem('store')) {
          // Replace the state object with the stored item
          const store = localStorage.getItem('store') || '{ memes: [] }'
          this.replaceState(
            Object.assign(state, JSON.parse(store))
          );
        }
      }
		},
    addMeme(state: any, newMeme: Meme) {
      state.memes.push(newMeme)
    },
    updateMeme(state: any, {index, title, description, image} ) {
      Vue.set(state.memes, index, {title, image, description})
    },
    removeMeme(state: any,  index) {
      state.memes.splice(index, 1)
    }
  },
  actions: {
    addMeme(context: any, newMeme: Meme) {
      context.commit('addMeme', newMeme)
    },
    updateMeme(context: any, updatedMeme: any) {
      context.commit('updateMeme', updatedMeme)
    },
    removeMeme(context: any, index: number) {
      context.commit('removeMeme', index)
    }
  },
  modules: {
  }
})

// Subscribe to store updates
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});

export default store;
