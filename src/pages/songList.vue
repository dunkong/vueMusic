<template>
   <div class="songList">
        <div>
        <div class="topbg topbg-blur" :style="'background-image:url('+picUrl+')'"></div>
        <div class="topbg-content">
            <img :src="picUrl" alt="">
            <span>{{name}}</span></div>
        </div>
        <div class="listContent">
            <div class="listContent-item" v-for="(item, index) in tracks" :key="index" :data-id="item.id" @click="playMusic($event)">
                <div class="index">{{index+1}}</div>
                <div class="songInfo">{{item.name}}</div>
                <div class="more">···</div>
            </div>
        </div>
        <player :sonUrl="sonUrl"></player>
   </div>
</template>

<script type="text/ecmascript-6">
import Player from '@/components/player.vue'
export default {
   name: 'songList',
   data() {
       return {
           id:'',
           name:'',
           picUrl:'',
           tracks:'',
           sonUrl:''
       }
   },
   beforeMount() {
    let id= this.$route.query.id  
    this.id=this.$route.query.id
    this.name=this.$route.query.name
    this.picUrl=this.$route.query.picUrl
    this.$http.get('http://localhost:3000/playlist/detail?id='+id)
  .then(response=> {
        //this.result=response.data.result
        this.tracks=response.data.playlist.tracks
        console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
},
methods:{
    playMusic:function(e){
        var id=e.currentTarget.getAttribute("data-id");
        this.$http.get('http://localhost:3000/music/url?id='+id)
  .then(response=> {
        //this.result=response.data.result
        this.sonUrl=JSON.parse(JSON.stringify(response.data)).data[0].url
  })
  .catch(function (error) {
    console.log(error);
  });
    }
},
  components: {
      Player
  }
}
</script>

<style>
.topbg{
    width:100%;
    height:300px;
    position:absolute;
    z-index:-999;
    overflow: hidden;
}
.topbg-blur{
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter:blur(100px);
}
.topbg-content{
    height: 300px;
    display:flex;
    justify-content: space-around;
    color: #fff;
    font-weight: bolder;
    align-items: center
}
.topbg-content img{
    width: 30%;
    height: 110px;
    border-radius: 10px;
}
.topbg-content span{
    width: 50%;
}
.listContent{
    background-color: #fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    margin-bottom:60px;
}
.listContent-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
    height:50px;
}
.listContent-item .index{
    font-size:14px;
    color:#ccc;
}
.listContent-item .songInfo{
    width: 60%;
}
</style>
