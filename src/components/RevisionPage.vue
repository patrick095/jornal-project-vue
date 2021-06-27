<template>
    <tr>
        <td>{{ index }}</td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index & el.status !== 'concluido' & el.sector !== 'revisão')">{{ pagesStatus.find(el => el.number === index).status }}</td>
        <td v-else-if="pagesStatus.find(el => el.number === index & el.status === 'concluido' & el.sector !== 'revisão')"><button class="PickUpButton" @click="pickUpPage(index, worker)">Pegar Pág</button></td>
        <td v-else-if="pagesStatus.find(el => el.number === index & el.worker === worker.name & el.status === 'concluido')"><button class="FinishedButton">{{ pagesStatus.find(el => el.number === index).status }}</button></td>
        <td v-else-if="pagesStatus.find(el => el.number === index & el.worker === worker.name)"><button class="FinishButton" @click="sendToRevision(index)">Fechar Pág</button></td>
        <td v-else></td>
        <td>  </td>
        <td>{{ index+(totalPages/2) }}</td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2) & el.status !== 'concluido' & el.sector !== 'revisão')">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).status }}</td>
        <td v-else-if="pagesStatus.find(el => el.number === index+(totalPages/2) & el.status === 'concluido' & el.sector !== 'revisão')"><button class="PickUpButton" @click="pickUpPage(index+(totalPages/2), worker)">Pegar Pág</button></td>
        <td v-else-if="pagesStatus.find(el => el.number === index+(totalPages/2) & el.worker === worker.name & el.status === 'concluido')"><button class="FinishedButton">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).status }}</button></td>
        <td v-else-if="pagesStatus.find(el => el.number === index+(totalPages/2) & el.worker === worker.name)"><button class="FinishButton" @click="sendToRevision(index+(totalPages/2))">Fechar Pág</button></td>
        <td v-else></td>
    </tr>
</template>

<script lang="ts">
import { IpagesStatus, Page } from '../@types/PagesTypes'
import { defineComponent } from 'vue'
import store from '../store'
import { IWorker } from '../@types/WorkersTypes'

export default defineComponent({
  name: 'ResumePage',
  props: {
    index: Number,
    pagesStatus: {
      type: Object,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    worker: Object
  },
  store,
  methods: {
    pickUpPage (index: number, worker: IWorker) {
      const newPages: IpagesStatus = this.pagesStatus.map((page:Page) => page)
      const key = newPages.findIndex(el => el.number === index)
      newPages[key].status = 'aberto'
      newPages[key].worker = worker.name
      newPages[key].sector = 'revisão'
      const Data = {
        totalPages: this.totalPages,
        pagesStatus: newPages
      }
      const day = 0
      store.dispatch('postApiData', { Data, day })
      return ''
    },
    sendToRevision (index: number) {
      const newPages: IpagesStatus = this.pagesStatus.map((page:Page) => page)
      const key = newPages.findIndex(el => el.number === index)
      newPages[key].status = 'concluido'
      const day = 0
      const Data = {
        totalPages: this.totalPages,
        pagesStatus: newPages
      }
      store.dispatch('postApiData', { Data, day })
    }
  }
})
</script>
<style scoped>
td {
    margin: 0;
    padding: 5px;
    min-width: 40px;
}
button {
    width: 100px;
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 200ms;
}
button:hover {
    opacity: 0.8;
}
.PickUpButton {
    background-color: rgb(55, 223, 111);
}
.FinishButton {
    background-color: rgb(228, 228, 44);
}
.FinishedButton {
  background-color: rgb(65, 145, 236);
}
</style>
