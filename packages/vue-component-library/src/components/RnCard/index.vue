<template lang="html">
  <div class="rn-card" :class="padding">
    <h4 class="title" v-if="title">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script src="./scripts.js"></script>
