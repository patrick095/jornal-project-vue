<template>
<div class="loading"><h3>Carregando...</h3><div class="circle"></div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'loadin'
})
</script>
<style scoped>
.loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}
.loading h3 {
    font-weight: 400;
}
.circle {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 3px solid #e2e2e2;
  border-top-color: transparent;
  animation-name: loadingCircle;
  animation: loadingCircle 0.5s infinite linear;
}
@keyframes loadingCircle {
    to {
        transform: rotate(1turn);
    }
}
</style>
