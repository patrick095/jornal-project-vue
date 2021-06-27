import { IpagesStatus } from '@/@types/PagesTypes'
import { createStore } from 'vuex'
import { getData, postData } from '../services/api'

const pagesStatus: IpagesStatus = []

export default createStore({
  state: {
    totalPages: 0,
    pagesStatus,
    day: 0,
    journalDays: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  },
  mutations: {
    updateData (state, res) {
      state.pagesStatus = res.pagesStatus
      state.totalPages = res.totalPages
    },
    resetData (state) {
      state.pagesStatus = []
      state.totalPages = 0
    }
  },
  actions: {
    getApiData (context, day) {
      context.commit('resetData')
      getData(day).then(res => {
        context.commit('updateData', res)
      })
    },
    postApiData (context, { Data, day }):void {
      postData(Data, day).then(res => {
        context.commit('updateData', res)
      })
    }
  },
  modules: {
  }
})
