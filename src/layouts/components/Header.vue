<script setup>
  import { computed } from '@vue/runtime-core'
import { Dropdown, ListGroup, ListGroupItem, Button } from 'flowbite-vue'
  const isLogin = computed(() => false)
</script>

<template>
  <div class="border-b bg-cyan-50 fixed left-0 right-0">
    <div
      class="px-10 py-2 max-w-[1200px] mx-auto flex items-center justify-between"
    >
      <div
        class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 flex items-center justify-center text-teal-500"
      >
        N
      </div>

      <dropdown v-if="isLogin">
        <template #trigger="{ toggle }">
          <Button>
            <font-awesome-icon
              @click="toggle"
              icon="fa-solid fa-bars"
              class="cursor-pointer"
            />
          </Button>
        </template>
        <list-group>
          <list-group-item>
            <template #prefix>
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
            Profile
          </list-group-item>
          <list-group-item>
            <template #prefix>
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
            </template>
            Settings
          </list-group-item>
          <list-group-item>
            <template #prefix>
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
            Messages
          </list-group-item>
          <list-group-item>
            <template #prefix>
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
            Download
          </list-group-item>
        </list-group>
      </dropdown>

      <div v-else class="flex gap-x-2">
        <Button gradient="cyan">Sign up</Button>
        <Button gradient="lime">Sign in</Button>
      </div>
    </div>
  </div>
</template>
