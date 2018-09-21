<template>
   <div class="musicList">
      <div class="list-item" v-for="(item, index) in result" :key="index" @click="goSongList($event)" :data-id="item.id" :data-name="item.name" :data-pic="item.picUrl">
        <img :src="item.picUrl" alt="" srcset="" class="list-item-cover">
        <span class="list-item-name">{{item.name}}</span>
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'musicList',
   data() {
       return {
				 result:''
			 }
   },
	 beforeMount:function(){
			this.$http.get('http://localhost:3000/personalized')
  .then(response=> {
        this.result=response.data.result
        console.log(response.data.result)
  })
  .catch(function (error) {
    console.log(error);
  });
   },
   methods:{
     goSongList:function(e){
       var id=e.currentTarget.getAttribute("data-id")
       var name=e.currentTarget.getAttribute("data-name")
       var picUrl=e.currentTarget.getAttribute("data-pic")
       //his.$router.push('/songList')
       this.$router.push({ name: 'songList', query: { id,name,picUrl }})
     }
   },
  components: {}
}
</script>

<style>
	.musicList{
        width:100%;
        word-break: break-all; word-wrap:break-word;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap
	}
  .list-item{
    width: 30%;
    margin-top: 10px;
  }
  .list-item-cover{
    width: 100%;
    height: 120px;
    border-radius: 10px;
  }
  .list-item-name{
    width: 90%;
    font-size: 10px;
  }
</style>
