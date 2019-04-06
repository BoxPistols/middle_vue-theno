<template>
<!-- <section id="app-component">
  <div class="app-component-wrapper">
    <h1>{{title}}</h1>
  </div>
</section> -->

<header>
  <h1>{{ title }}</h1>
</header>

</template>

<script>
export default {
  name: 'mainComponent',
  data() {
    return {
      title: 'ザ脳.com',
    }
  }
}
</script>


<style lang="sass" scoped>
// .app-component-wrapper {
//     padding: 20px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     transform: translate(50%, 0%);
//     margin-left: -5em;
//     // background: #000;
// }
header
  position: absolute
  z-index: 0
  top: 0
  right: 0
  bottom: 0
  left: 0
  width: 100%
  height: 3em
  margin: auto
  transform: translate(50%, 50%)

  h1
    width: auto
    height: 1.4em
    margin-top: -0.8em
    margin-left: -2.1em
    color: #f5f5fb
    font-size: 8rem
    font-weight: 100
    display: flex
    z-index: 10
    display: block
    text-shadow: 3px 3px 23px #a5ffb8
    @media only screen and (max-width: 768px)
      font-size: calc(3em + 2vw)
</style>
