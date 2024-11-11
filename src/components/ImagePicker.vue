<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
/*  eslint-disable @typescript-eslint/no-unused-vars */
import { ref, onMounted, defineProps, defineModel } from 'vue'

const props = defineProps<{
  buttonLabel: string
}>()

const imagefield = defineModel('imagefield')

function onSelectImage() {
  alert('You clicked it buddy!')
}

onMounted(() => {
  console.log('COMPONENT MOUNTED')
})
</script>

<template>
  <InputGroup>
    <input v-model="imagefield" placeholder="Select an Image" />
    <InputGroupAddon>
      <Button icon="pi pi-image" v-on:click="onSelectImage" />
    </InputGroupAddon>
  </InputGroup>
</template>

<style scoped></style>
