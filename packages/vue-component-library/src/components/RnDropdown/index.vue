<template lang="html">
  <div class="rn-dropdown" :class="open ? 'is-open' : 'is-closed'">
    <button class="button" @click="toggle">
      {{ selectedOptionLabel }}
      <svg class="h_ml-10 rn-dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="7">
        <path fill="#6F798A" fill-rule="evenodd" d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"/>
      </svg>
    </button>
    <rn-card class="rn-dropdown-menu">
      <slot v-if="!options"></slot>
      <a
        :key="index"
        v-else
        v-for="(option, index) in formattedOptions"
        @click="selectOption(option)"
      >
        {{option.label}}
      </a>
    </rn-card>
  </div>
</template>

<script src="./scripts.js"></script>
