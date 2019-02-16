<template>
<div id="menu">
  <radial-menu style="background-color: #d7d7ff" :itemSize="50" :radius="150" :angle-restriction="100">
    <radial-menu-item v-for="(item, index) in items" :key="index" style="background-color: white" @click="() => handleClick(item)">
      <a v-bind:href="item">{{ item }}</a>
      <!-- <span>{{item}}</span> -->
    </radial-menu-item>
  </radial-menu>
  <!-- <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div> -->
  <!-- <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ title }}</div> -->
</div>
</template>

<script>
import {
  RadialMenu,
  RadialMenuItem
} from 'vue-radial-menu'

export default {
  name: 'menu',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data() {
    return {
      items: ['foo', 'bar', 'hello', 'world', 'more'],
      lastClicked: 'click on!',
      title: "Click"
    }
  },
  methods: {
    handleClick(item) {
      this.lastClicked = item;
    }
  }
}
</script>

<style lang="scss" scoped>
#menu{
  position: absolute;
  // top: 0;
  bottom: 5%;
  // left: 2%;
  right: 2%;
  // transform: translate(0%, -10%);
  z-index: 100;
  cursor: pointer;
}
a {
    color: #8080b1;
    text-decoration: none;
}
</style>
