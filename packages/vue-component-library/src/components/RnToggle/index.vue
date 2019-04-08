<template>
  <label class="rn-toggle" :class="classes">
    <input
      :checked.prop="isChecked"
      class="rn-toggle__input"
      :disabled="disabled"
      :name="name"
      ref="input"
      type="checkbox"
      :value="trueValue"
      @blur="onBlur"
      @click="onClick"
      @focus="onFocus"
    >
    <div class="rn-toggle__track">
      <div class="rn-toggle__switch"/>
    </div>
    <span class="rn-toggle__label-inner">{{label}}</span>
  </label>
</template>

<script src="./scripts.js"></script>
