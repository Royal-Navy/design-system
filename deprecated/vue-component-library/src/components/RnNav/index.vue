<template lang="html">
  <nav class="rn-nav" :class="orientation">
    <a
      class="rn-nav__item"
      :class="alignment"
      v-for="(item, key) in navItems"
      :key="key"
      :href="item.url"
    >{{item.label}}
    </a>
  </nav>
</template>
<script src="./scripts.js"></script>
