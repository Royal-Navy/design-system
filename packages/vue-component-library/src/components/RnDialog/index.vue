<template lang="html">
  <div class="rn-dialog" v-bind:class="{ error: error }">
    <div class="window">
      <div class="header" v-if="title">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <template v-if="!hideCancel">
          <rn-button class="secondary h_mr-2" type="link" @click="clickCancel">Cancel</rn-button>
        </template>
        <template v-if="!hideAction">
          <rn-button v-if="error" type="error" @click="clickAction">{{ actionButtonText }}</rn-button>
          <rn-button v-else @click="clickAction">{{ actionButtonText }}</rn-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
