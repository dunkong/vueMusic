<template>
   <div class="searchInput">
       <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'searchInput',
   data() {
       return {
            value:""
       }
   },
  components: {}
}
</script>

<style>
    .searchInput{
        height: 50px;
        overflow: hidden;
    }
</style>
