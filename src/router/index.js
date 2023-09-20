import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: '首页',
          isNotAuth: true
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/chat',
        name: 'Chat',
        meta: {
          title: 'AI聊天',
          isNotAuth: true
        },
        component: () => import('@/views/chat/index.vue')
      },
      {
        path: '/dify',
        name: 'Dify',
        meta: {
          title: 'Dify',
          isNotAuth: true
        },
        component: () => import('@/views/dify/index.vue')
      },
      {
        path: '/commodity',
        name: 'CommodityList',
        meta: {
          title: '商品列表',
          isNotAuth: true
        },
        component: () => import('@/views/commodity/list/index.vue')
      },
      {
        path: '/commodity/detail/:id?',
        name: 'CommodityDetail',
        meta: {
          title: '商品详情',
          isNotAuth: true
        },
        component: () => import('@/views/commodity/detail/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      isNotAuth: true
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
      isNotAuth: true
    },
    component: () => import('@/views/login/register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
