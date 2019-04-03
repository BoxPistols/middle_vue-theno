<template>
<div id="menu">
  <radial-menu style="background-color: #d7d7ff" :itemSize="55" :radius="165" :angle-restriction="85">
    <radial-menu-item v-for="(item, index) in items" :key="index" style="" @click="() => handleClick(item)">
      <a v-bind:href=" 'https://xn--wckt73v.com/' + item" target="_blank">{{ item }}</a>
      <!-- <span>{{item}}</span> -->
    </radial-menu-item>
  </radial-menu>
  <!-- <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div> -->
  <!-- <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ title }}</div> -->
  <span class="menuTitle">Menu</span>

  <span class="otherLink">
    <a href="https://xn--pbk2cna1c.com/" target="_blank">Ggrks</a>
  </span>
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
      items: ['post-ito', 'thenote', 'nnkaigi', 'buster', 'unsp', 'wp'],
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
#menu {
    position: absolute;
    // top: 0;
    bottom: 5%;
    // left: 2%;
    right: 2%;
    // transform: translate(0%, -10%);
    z-index: 100;
    cursor: pointer;
    .vue-radial-menu-container {
        &:hover {
            background: rgba(255, 0, 0, 0.76);
            opacity: 0.8;
        }
    }
    .vue-radial-menu-item {
        background-color: rgba(#d7d7ff, 0.36);
        a {
            opacity: 1;
            color: #fff;
            white-space: nowrap;
            text-decoration: none;
            min-width: 4em;
            text-align: center;
            padding: 3px 5px;
            transition: 0.2s;
            &:hover {
                background-color: rgba(255, 0, 0, 0.76);
                opacity: 0.8;
            }
        }
    }
    .menuTitle,
    .otherLink {
        position: absolute;
        bottom: -23px;
        right: 6px;
        white-space: nowrap;
        color: #e2e0e3;
        font-size: 14px;
        opacity: 0.9;
        font-family: sans-serif;
    }
    .otherLink {
        bottom: 56px;
        right: -6px;
        font-size: 19px;
        a {
            color: #e2e0e3;
            padding: 3px 5px;

            white-space: nowrap;
            text-decoration: none;
            &:hover {
                background-color: rgba(255, 0, 0, 0.76);
                opacity: 0.8;
            }
        }
    }
}
</style>
