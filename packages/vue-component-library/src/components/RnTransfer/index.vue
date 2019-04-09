<template lang="html">
  <div class="rn-transfer">
    <div class="column-left"> 
      <h1 v-if="leftHeader">{{leftHeader}}</h1>
      <ul aria-label="checkbox-group">
        <li v-for="(item) in leftList" :key="item.id">
          <label>
            <input type="checkbox" :name="item.id" :value="item.location" @click="item.checked = true"/>
            <span>{{item.location}}</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="transfer-buttons">
      <span class="left" @click="to_left"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10">
  <g fill="#fff" fill-rule="evenodd" transform="translate(0 .199)">
    <polygon points="10.548 9.095 6 4.548 10.548 0 11.969 1.421 8.842 4.548 11.969 7.674" transform="rotate(0 8.984 4.548)"/>
    <polygon points="4.548 9.095 0 4.548 4.548 0 5.969 1.421 2.842 4.548 5.969 7.674" transform="rotate(0 2.984 4.548)"/>
  </g>
</svg>
</span>
      <span class="right" @click="to_right"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10">
  <g fill="#fff" fill-rule="evenodd" transform="translate(0 .199)">
    <polygon points="10.548 9.095 6 4.548 10.548 0 11.969 1.421 8.842 4.548 11.969 7.674" transform="rotate(180 8.984 4.548)"/>
    <polygon points="4.548 9.095 0 4.548 4.548 0 5.969 1.421 2.842 4.548 5.969 7.674" transform="rotate(180 2.984 4.548)"/>
  </g>
</svg>
</span>
    </div>
    <div class="column-right">
      <h1 v-if="rightHeader">{{rightHeader}}</h1>
      <ul aria-label="checkbox-group">
        <li v-for="(item) in rightList" :key="item.id">
          <label>
            <input type="checkbox" :name="item.id" :value="item.location" @click="item.checked = true"/>
            <span>{{item.location}}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
