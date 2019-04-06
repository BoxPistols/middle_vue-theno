<template>
<div class="audio_wrap">
  <button class="sound" v-bind:class='{play:isActive}' v-on:click='isActive=!isActive'>
    {{ title }}
  </button>

  <audio id="audio" src="img/universe.mp3" loop="loop">
    Your Browser
    <code>audio</code>
    not Support
  </audio>
  <div class="download">
    <a href="img/universe.mp3" download="universe.mp3">This Sound Download</a>
  </div>

</div>
</template>

<script>
export default {
  name: 'buttonComponent',
  data() {
    return {
      title: 'Sound Play',
      isActive: true,
    }
  }
}

$(function() {
  var a = $(".sound"),
    o = $(".audio_wrap"),
    l = document.getElementById("audio");
  a.on("click", function() {
    o.hasClass("play") ? (l.pause(),
      o.removeClass("play")) : (l.play(),
      o.addClass("play"))
  })
});
</script>


<style lang="sass" scoped>
.audio_wrap
  // background: #eee
  width: 100px
  z-index: 10
  display: block
  position: absolute
  right: 10px
  top: 2px

button.sound
  padding: .5em 1em
  color: #222
  background: rgba(255, 0, 0, 0.76)
  cursor: pointer
  transition: .2s
  &:hover
    opacity: .8
  &:focus,&:active
    outline: none
  &.play
    background: #222
    color: #fff

.download a
  color: #fff
  position: absolute
  right: 0px
  top: 40px
  font-size: 10px
  text-decoration: none
  border-bottom: 1px solid #fff
  transition: .2s
  &:hover
    opacity: .8

</style>
