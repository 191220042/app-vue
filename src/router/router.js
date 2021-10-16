import Home from '../Home'
import Hello from '../components/Hello'
import Battle from "../components/Battle"
import PlayerShow from "../components/PlayerShow";

export default [
    {
        path: '/app',
        component: Home ,
        children:[
            {
                path:'/battle',
                component:Battle,
            },
            {
                path: '/playerShow',
                component: PlayerShow,
            },
            {
              path: '/',
              component: Battle ,
            }
        ]
    },
    { path:'/hello', component: Hello},
    { path:'/',component: Hello},

]

