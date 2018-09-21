<template>
   <div class="player">
        <audio :src="sonUrl" controls="controls" autoplay="autoplay">
        </audio>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'player',
   props:['sonUrl'],
   data() {
       return {}
   },
  components: {}
}
</script>

<style>
</style>
