import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import About from '../views/About.vue';
import EventDetails from '../views/EventDetails.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
