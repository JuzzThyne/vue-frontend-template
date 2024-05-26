
import LoginComponent from '@/components/authentication/LoginComponent.vue';
import RegisterComponent from '@/components/authentication/RegisterComponent.vue';
const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    },
    // {
    //     path: "/dashboard",
    //     name: "dashboard",
    //     component: DashboardGroupComponent,
    //     beforeEnter: (to, from, next) => {
    //         repository.checkAccessUser(to.params.id).then((response) => {
    //             if (response.data == 'fail') {
    //                 next('/no-access')
    //             } else {
    //                 next()
    //             }
    //         }).catch(() => {
    
    //         })
    //     },
    //     meta: {
    //         requiresAuth: true,
    //         title: 'Dashboard',
    //     }

    // }
]

export default routes;