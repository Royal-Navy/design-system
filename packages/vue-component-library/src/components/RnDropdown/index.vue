<template lang="html">
  <div :class="styles">
    <button class="rn-dropdown__button" @click="toggle">
      <span class="rn-dropdown__label">{{ selectedOptionLabel }}</span>
      <svg class="h_ml-10 rn-dropdown__arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="7">
        <path fill="#6F798A" fill-rule="evenodd" d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"/>
      </svg>
    </button>
    <div v-if="open" class="rn-dropdown__sheet">
      <slot v-if="!formattedOptions"></slot>
      <div
        v-else
        v-for="(option, index) in formattedOptions"
        class="rn-dropdown__option"
        :key="index"
        @click="selectOption(option)"
        role="option"
      >
        <span class="rn-dropdown__option__label">{{option.label}}</span>
        <span v-if="option.helper" class="rn-dropdown__option__helper">{{option.helper}}</span>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
