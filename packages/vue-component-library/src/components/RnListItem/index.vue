<template lang="html">
  <li class="rn-list__item" :class="type">
    <h4 v-if="title" class="title">{{ title }}</h4>
    <slot></slot>
  </li>
</template>

<script src="./scripts.js"></script>
