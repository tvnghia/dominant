<script setup lang="ts">
  import { ref } from 'vue'
  import { Spinner, Button, TheCard } from 'flowbite-vue'
  import { useAxios } from '@vueuse/integrations/useAxios'

  const { data, isFinished } = useAxios(
    'https://jsonplaceholder.typicode.com/todos'
  )
</script>

<template>
  <Container>
    <div class="grid grid-cols-2 gap-10">
      <the-card
        class="max-w-none"
        variant="image"
        img-src="/src/assets/job1.jpeg"
        img-alt="Desk"
        v-for="item in data"
        :key="item.id"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Button gradient="teal">Xem chi tiết</Button>
      </the-card>
    </div>
  </Container>
</template>
