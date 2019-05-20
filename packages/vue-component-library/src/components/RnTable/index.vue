<template lang="html">
  <table class="rn-table" :class="{sortable}">
    <slot v-if="!tableData"></slot>
    <template v-else>
      <thead v-if="headings">
        <tr>
          <th :class="{ 'sorted': (index === idxSorted), 'sort-asc': ( sortOrder === 'asc' ), 'sort-desc' :  (sortOrder === 'desc'), 'sort-none' :  (sortOrder === 'unsorted') }" v-for="(item, index) in headings" :key="index" @click="sort_column(index)">
            {{item}}
            <svg v-if="sortable" class="rn-table__arrow rn-table__arrow--up" xmlns="http://www.w3.org/2000/svg" width="11" height="7">
              <path fill="#6F798A" fill-rule="evenodd" d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"/>
            </svg>
            <svg v-if="sortable" class="rn-table__arrow rn-table__arrow--down" xmlns="http://www.w3.org/2000/svg" width="11" height="7">
              <path fill="#6F798A" fill-rule="evenodd" d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"/>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sorted" :key="index">
          <td v-for="(val,valIndex) in item" :key="valIndex">{{ val }}</td>
        </tr>
      </tbody>
      <caption v-if="caption"><span class="table-caption">{{caption}}</span></caption>
    </template>

  </table>
</template>
<script src="./scripts.js"></script>
