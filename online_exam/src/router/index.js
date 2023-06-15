import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdministratorView from '../views/AdministratorView.vue';
import RankListView from '../views/RankListView.vue';
import RegisterView from '../views/RegisterView.vue';
import TestView from '../views/TestView.vue'

// import { useStore } from 'vuex';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: {
    //   requiresAuth: true 
    // }
  },
  {
    path: '/administrator',
    name: 'adminstrator',
    component: AdministratorView,
    // meta: {
    //   requiresAuth: true 
    // }
  },
  {
    path: '/ranklist',
    name: 'ranklist',
    component: RankListView,
    // meta: {
    //   requiresAuth: true 
    // }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   const store=useStore();
//   const requiresAuth = to.meta.requiresAuth;
//   const isLogin = store.state.isLogin; 

//   if (requiresAuth && !isLogin) {
//     next('/register');
//   } else {
//     next();
//   }
// });

export default router;
