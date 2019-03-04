<template lang="html">
  <div class="rn-inputBlock">
    <textarea
      v-if="isTextArea"
      class="textarea"
      :id="id"
      :value="value"
      :rows="rows"
      :cols="cols"
      :name="name"
      @input="updateSelf" ></textarea>
    <input
      v-else
      class="input"
      :class="hasContent ? 'hasContent' : ''"
      :id="id"
      :type="type"
      :value="value"
      :focus="focus"
      :name="name"
      @input="updateSelf"
      @click="setFocus"
      @blur="looseFocus"
    />
    <label class="inputLabel" :for="id">
      <span class="inputLabelInner">{{ label }}</span>
    </label>
  </div>
</template>

<script src="./scripts.js"></script>
