<template>
    <tr>
        <td>{{ index }}</td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index)">{{ pagesStatus.find(el => el.number === index).status }}</td>
        <td v-else></td>
        <td>  </td>
        <td>{{ index+(totalPages/2) }}</td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).sector }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).worker }}</td>
        <td v-else></td>
        <td v-if="pagesStatus.find(el => el.number === index+(totalPages/2))">{{ pagesStatus.find(el => el.number === index+(totalPages/2)).status }}</td>
        <td v-else></td>
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
    padding: 10px;
    min-width: 40px;
}
</style>
