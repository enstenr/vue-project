<script setup lang="ts">
import {ref} from 'vue'

const name=ref('Fullstack360')
const rawHtml=ref(' <span style="color: red">This should be red.</span>')
const dynamicId= ref('1')

const isDisabled=ref(false)
 
const seen=ref(false)
</script>
 
<template>
My Contact Page component

<h1> Welcome {{name}}</h1>
<p>{{rawHtml}}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<div v-bind:id="dynamicId" ></div>
<div id="{{dynamicId}}"></div>

<button :disabled="isDisabled">disabled</button>

<button v-if="seen">disabled</button>


</template>