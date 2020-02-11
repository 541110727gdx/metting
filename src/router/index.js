import Vue from 'vue'
import Router from 'vue-router'
import login from "@/view/login"
import entrance from '@/components/entrance'//暂时入口
import index from "@/view/index";
import addMetting from "@/view/addMetting";
import mettingDetail from "@/view/mettingDetail";
Vue.use(Router)
// const datePageRouter = {
//   path: 'datePage',
//   name: '选择时间',
//   component: datePage,
//   props: true
// };
export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: login,
      props: true
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance,
      children:[
        {
          path:'index',
          name:'会议纪要',
          component:index,
          props:true,
          children:[
            {
              path:'addMetting',
              name:'新建会议',
              component:addMetting,
              props:true
            },
            {
              path:'mettingDetail',
              name:'会议详情',
              component:mettingDetail,
              prop:true
            }
          ]
        }
      ]
    },

  ]
})
