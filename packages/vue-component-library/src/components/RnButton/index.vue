<template lang="html">
  <button :icon="icon" :class="`rn-btn--primary ${state || ''}`" @click="onClick">
    <span><slot></slot></span>
    <rn-icon class="h_ml-1" v-if="!!icon" :name="icon" size="small" />
  </button>
</template>
<script src="./scripts.js"></script>
