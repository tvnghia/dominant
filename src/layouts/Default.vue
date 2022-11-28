<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './components/Header.vue'

  export default defineComponent({
    components: {
      Header,
    },
  })
</script>

<template>
  <Header />
  <div class="py-20">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>
