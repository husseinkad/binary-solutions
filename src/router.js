import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogSection from './components/BlogSection.vue';
import BlogPost from './components/BlogPost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogSection,
  },
  {
    path: '/blog/:id',
    name: 'blogPost',
    component: BlogPost,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});