<template>
<div>
  <button>{{ title }}</button>
</div>
</template>

<script>
export default {
  name: 'buttonComponent',
  data() {
    return {
      title: 'test',
    }
  }
}
</script>


<style lang="sass" scoped>
button
  display: none
  position: absolute
  right: 0
  top: 0
</style>
