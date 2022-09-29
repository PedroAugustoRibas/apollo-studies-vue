import route_atoms from "../views/SandBox/atoms/routes"
import route_molecules from "../views/SandBox/molecules/routes"
import route_organisms from "../views/SandBox/organisms/routes"
import SandBox from '../views/SandBox/SandBox.vue'
import DashboardPage from '../views/Dashboard/DashboardPage.vue'

const routes_sandbox =  route_atoms.concat(route_molecules,route_organisms)

const routes =  [{
        path: '/',
        name: 'dashboard',
        component:DashboardPage
    },
    {
        path: '/sandbox',
        name: 'sandbox',
        component:SandBox,
        children:routes_sandbox
    }]

export default routes
