<template>
  <div v-if="hasLegend">
    <fieldset class="rn-radios rn-radios--has-legend">
      <legend class="rn-radios__legend">{{ legend }}</legend>
      <div class="rn-radio" v-for="option in optionsWithState" :key="option.value">
        <label class="rn-radio__label">
          <span class="rn-radio__label-inner">{{ option.label }}</span>
          <input
            class="rn-radio__input"
            type="radio"
            :name="name"
            :value="option.value"
            :checked="option.checked"
            @input="update"
          >
        </label>
      </div>
    </fieldset>
  </div>
  <div v-else class="rn-radios">
    <div class="rn-radio" v-for="option in optionsWithState" :key="option.value">
      <label class="rn-radio__label">
        <span class="rn-radio__label-inner">{{ option.label }}</span>
        <input
          class="rn-radio__input"
          type="radio"
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
