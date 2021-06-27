<template>
    <tr>
        <td>{{ index }}</td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index)">
          <span class="yellow" v-if="pagesStatus.find(el => el.number === index).status === 'aberto'">{{ pagesStatus.find(el => el.number === index).status }}</span>
          <span class="green" v-else-if="pagesStatus.find(el => el.number === index).status === 'concluido'">{{ pagesStatus.find(el => el.number === index).status }}</span>
          <span class="red" v-else>{{ pagesStatus.find(el => el.number === index).status }}</span>
        </td>
        <td v-else><span class="red"> - </span></td>
        <td>  </td>
        <td>{{ index+(totalPages/2) }}</td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).status }}</td>
        <td v-else><span class="red"> - </span></td>
    </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// pagesStatus.find(el => el.number === index)
export default defineComponent({
  name: 'ResumePage',
  props: {
    index: Number,
    pagesStatus: Object,
    totalPages: Number
  }
})
</script>
<style scoped>
td {
    margin: 0;
    padding: 5px;
    min-width: 40px;
}
.green {
  color: rgb(45, 207, 45);
}
.yellow {
  color: rgb(252, 252, 132);
}
.red {
  color: rgb(243, 86, 86);
}
</style>
