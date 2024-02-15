<script setup lang="ts">
import { ref } from 'vue';

 const count = ref(0) ; 


 const titleclass=ref('title');

 function increment(){
    count.value++;
 }

 function updateConst(e:any){
    count.value=e.target.value
 }
</script>
<style>
.title{
    color:red;
}
</style>
<template> 
<div v-bind:class="titleclass"> Binding page {{ count }}</div>
<div :class="titleclass"> Binding page {{ count }}</div>

<button v-on:click="increment" >Click me </button>
<button @click="increment" >Click me </button>



<input :value="count" @input="updateConst" />

<input v-model="count"  />

</template>