<template>
    <div class="index">
        <searchInput></searchInput>
        <musicList></musicList>
    </div>
</template>

<script>
    import searchInput from '@/components/search.vue'
    import musicList from '@/components/musicList.vue'

    export default{
        name:'index',
        components:{
            searchInput,
            musicList
        }
    }
</script>

<style>

</style>