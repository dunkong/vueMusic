import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Detail from '@/pages/detail';
import User from '@/pages/user';
import SongList from '@/pages/songList';

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',name:'index',component:Index},
    {path:'/detail',name:'detail',component:Detail},
    {path:'/user',name:'user',component:User},
    {path:'/songList',name:'songList',component:SongList},
  ],
});
