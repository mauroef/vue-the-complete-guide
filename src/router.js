import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter: (to, from, next) => {
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // if (to.name === 'team-members') {
  //   next({ name: 'teams' });
  // }
  if (to.meta.needsAuth) {
    console.log('Needs Auth');
  }
  next();
});

router.afterEach((to, from) => {
  // sending analytics data
});

export default router;
