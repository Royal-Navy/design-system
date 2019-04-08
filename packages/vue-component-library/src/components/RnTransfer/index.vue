<template lang="html">
  <div class="rn-transfer">
    <div class="column-left"> 
      <h1 :if="leftHeader">{{leftHeader}}</h1>
      <ul aria-label="checkbox-group">
        <li v-for="(item, index) in leftList" :key="`item-${index}`">
          <label>
            <input type="checkbox" />
            <span>{{item.location}}</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="transfer-buttons">
      <span class="left" @click="to_left">&lt;</span>
      <span class="right" @click="to_right">&gt;</span>
    </div>
    <div class="column-right">
      <h1 :if="rightHeader">{{rightHeader}}</h1>
      <ul aria-label="checkbox-group">
        <li v-for="(item, index) in rightList" :key="`item-${index}`">
          <label>
            <input type="checkbox" />
            <span>{{item.location}}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
