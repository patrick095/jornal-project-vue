import { createStore } from 'vuex'
import { getData } from '../services/api'

interface Page {
  number: number;
  sector: 'edição' | 'revisão';
  worker: string;
  status: 'aberto' | 'trabalhando' | 'concluido'
}
export interface IpagesStatus {
  [index: number]: Page
}
const pagesStatus: IpagesStatus = []

export default createStore({
  state: {
    totalPages: 0,
    pagesStatus,
    day: 0
  },
  mutations: {
    updateData (state, res) {
      console.log('update store')
      state.pagesStatus = res.pageStatus
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
    }
  },
  modules: {
  }
})
