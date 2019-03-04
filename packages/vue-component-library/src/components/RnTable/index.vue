<template lang="html">
  <table class="rn-table">
    <slot v-if="!tableData"></slot>
    <template v-else>
      <thead v-if="headings">
        <tr>
          <th v-for="(item, index) in headings" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td v-for="(val,valIndex) in item" :key="valIndex">{{ val }}</td>
        </tr>
      </tbody>
      <caption v-if="caption"><span class="table-caption">{{caption}}</span></caption>
    </template>

  </table>
</template>
<script src="./scripts.js"></script>
