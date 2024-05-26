import UserGroupComponent from '../../components/user/UserComponent.vue'

const routes = [
    {
        path: "/users",
        name: "user",
        component: UserGroupComponent,
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
            title: 'User',
        }

    }
]

export default routes;