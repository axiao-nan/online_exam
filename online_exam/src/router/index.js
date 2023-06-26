import { createRouter, createWebHistory } from 'vue-router';
import StudentView from '../views/StudentView.vue';
import AdministratorView from '../views/AdministratorView.vue';
import RankListView from '../views/RankListView.vue';
import LoginView from '../views/LoginView.vue';
import TestView from '../views/TestView.vue'

import { useStore } from 'vuex';

const routes = [
  {
    path: '/student',
    name: 'student',
    component: StudentView,
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: '/administrator',
    name: 'adminstrator',
    component: AdministratorView,
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: '/ranklist',
    name: 'ranklist',
    component: RankListView,
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store=useStore();
  const requiresAuth = to.meta.requiresAuth;
  const isLogin = store.state.isLogin; 

  if (requiresAuth && !isLogin) {
    next('/login');
  } else {
    next();
  }
});

export default router;
