<template lang="html">
  <div class="rn-alert" :class="[state, error]">
    <div class="window">
      <button id="close-button" v-if="!hideClose" type="button" class="close"  @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="currentColor"
              fillRule="evenod"
              d="M8.09 6l3.48 3.48a1.48 1.48 0 1 1-2.09 2.09L6 8.09l-3.48 3.48A1.48 1.48 0 0 1 .43 9.48L3.91 6 .43 2.52A1.48 1.48 0 1 1 2.52.43L6 3.91 9.48.43a1.48 1.48 0 0 1 2.09 2.09L8.09 6z"
            />
          </svg>
        </button>
      <div class="header" v-if="title">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <template v-if="!hideAction">
          <rn-button id="error-button" v-if="error" type="error" @click="$emit('clickAction')">{{ actionButtonText }}</rn-button>
          <rn-button id="action-button" state="neutral regular" v-else @click="$emit('clickAction')">{{ actionButtonText }}</rn-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>

