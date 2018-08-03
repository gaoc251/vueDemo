import index from './views/index.vue'
import second from './views/second.vue'

export default {
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/second',
            component: second
        }
    ]
}