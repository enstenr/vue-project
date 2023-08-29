<script setup lang="ts">
import {ref} from 'vue'

const day=ref('Saturday')

function dayClick(){
alert(' day clicked ')
}
</script>
 
<template>
  <div class="about">
    
    <button @click="dayClick" >Click Day</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
