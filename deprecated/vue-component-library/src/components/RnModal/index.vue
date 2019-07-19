<template lang="html">
  <div class="rn-modal" :class="{ error: error }">
    <div class="window">
      <div class="header" v-if="title">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <template v-if="!hideCancel">
          <rn-button id="cancel-button" class="secondary h_mr-2" type="link" @click="$emit('close')">Cancel</rn-button>
        </template>
        <template v-if="!hideAction">
          <rn-button id="error-button" v-if="error" type="error" @click="$emit('clickAction')">{{ actionButtonText }}</rn-button>
          <rn-button id="action-button" state="neutral regular" v-else @click="$emit('clickAction')">{{ actionButtonText }}</rn-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
