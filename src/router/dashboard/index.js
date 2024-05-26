
import DashboardGroupComponent from '../../components/dashboard/DashboardGroupComponent.vue'

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardGroupComponent,
        // beforeEnter: (to, from, next) => {
        //     repository.checkAccessUser(to.params.id).then((response) => {
        //         if (response.data == 'fail') {
        //             next('/no-access')
        //         } else {
        //             next()
        //         }
        //     }).catch(() => {
    
        //     })
        // },
        meta: {
            requiresAuth: true,
            title: 'Dashboard',
        }

    }
]

export default routes;