import Home from './components/Home.vue'
import Login from './components/auth/Login'
import CustomersMain from './components/customers/Main'
import CustomersList from './components/customers/List'
import NewCustomer from './components/customers/New'
import Customer from './components/customers/View'

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth:true
        },
        children: [
            { path: '/', component: CustomersList },
            { path: 'new', component: NewCustomer },
            { path: ':id', component: Customer }
        ]
    }
]