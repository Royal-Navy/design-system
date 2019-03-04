<template lang="html">
  <div v-if="open" :class="classes">
    <h4 v-if="title" class="title">{{ title }}</h4>
    <p class="message">
      <slot></slot>
    </p>
    <button type="button" class="close" @click.prevent="close">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <path
          fill="currentColor"
          fillRule="evenod"
          d="M8.09 6l3.48 3.48a1.48 1.48 0 1 1-2.09 2.09L6 8.09l-3.48 3.48A1.48 1.48 0 0 1 .43 9.48L3.91 6 .43 2.52A1.48 1.48 0 1 1 2.52.43L6 3.91 9.48.43a1.48 1.48 0 0 1 2.09 2.09L8.09 6z"
        />
      </svg>
    </button>
  </div>
</template>

<script src="./scripts.js"></script>
