<template>
  <div v-if="hasLegend">
    <fieldset class="rn-checkboxes rn-checkboxes--has-legend">
      <legend class="rn-checkboxes__legend">{{ legend }}</legend>
      <div class="rn-checkbox" v-for="option in optionsWithState" :key="option.value">
        <label class="rn-checkbox__label">
          <span class="rn-checkbox__label-inner">{{ option.label }}</span>
          <input
            class="rn-checkbox__input"
            type="checkbox"
            :name="name"
            :value="option.value"
            :checked="option.checked"
            @input="update"
          >
        </label>
      </div>
    </fieldset>
  </div>
  <div v-else class="rn-checkboxes">
    <div class="rn-checkbox" v-for="option in optionsWithState" :key="option.value">
      <label class="rn-checkbox__label">
        <span class="rn-checkbox__label-inner">{{ option.label }}</span>
        <input
          class="rn-checkbox__input"
          type="checkbox"
          :name="name"
          :value="option.value"
          :checked="option.checked"
          @input="update"
        >
      </label>
    </div>
  </div>
</template>

<script src="./scripts"></script>
