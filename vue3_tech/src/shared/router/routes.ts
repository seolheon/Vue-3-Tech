
import { RouteRecordRaw } from "vue-router"
import HomePage from '../../pages/HomePage.vue';
import EmptyPage from '../../pages/EmptyPage.vue';

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/empty',
    name: 'Empty',
    component: EmptyPage,
  }
];

export default routes
