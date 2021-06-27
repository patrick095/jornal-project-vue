<template>
  <div class="Home">
    <div>
      <label for="weekDay">Selecione o jornal para ver um resumo: </label>
        <select v-model="daySelected" @change="selectDay">
          <option value="-1">Selecione um dia</option>
          <option v-for="(option, index) in options" v-bind:key="index" :value="index">{{option}}</option>
        </select>
    </div>
    <!-- v-if="daySelected !== null" -->
    <loading v-if="totalPages === 0 & daySelected >= 0" />
    <div class="Pages" v-else-if="daySelected  >= 0">
      <table>
        <thead>
          <tr>
            <th>Pág.</th>
            <th>Setor</th>
            <th>Funcionário</th>
            <th>Status</th>
            <th> </th>
            <th>Pág.</th>
            <th>Setor</th>
            <th>Funcionário</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <resume-page v-for="(index) in (totalPages/2)" v-bind:key="index" :index="index" :pagesStatus="pagesStatus" :totalPages="totalPages" />
        </tbody>
      </table>
    </div>
    <h1 v-else>Selecione uma data para ver o resumo.</h1>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import ResumePage from '@/components/ResumePage.vue'
import { defineComponent } from 'vue'
import store from '../store'

// const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
// const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const journalDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

export default defineComponent({
  name: 'Home',
  components: {
    ResumePage,
    Loading
  },
  data () {
    return {
      daySelected: -1,
      options: journalDays
    }
  },
  store,
  computed: {
    selectDay () {
      store.dispatch('getApiData', this.daySelected)
      return ''
    },
    totalPages () {
      return store.state.totalPages
    },
    pagesStatus () {
      return store.state.pagesStatus
    }
  }
})
</script>
<style>
.Home {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.Home select {
  padding: 5px;
  border-radius: 5px;
  outline: none;
  background-color: #292929;
  color: #e2e2e2;
}
.Pages {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
animation: showPages 0.3s linear;
background-color: #3a3a3a;
border-radius: 5px;
margin: 50px;
}
.Pages table {
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #e2e2e279;
  animation: showTable 0.5s ease-in-out;
}
@keyframes showPages {
    from {
      transform: translateX(-800px);
  }
    to {
      transform: translateX(0px);
  }
}
@keyframes showTable {
    from {
      opacity: 0;
  }
    to {
        opacity: 1;
  }
}
@media screen and (max-width: 800px) {
  .Pages, .Pages table {
    width: 90vw;
  }
}
</style>
