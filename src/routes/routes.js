import config from '~/config'

import { HeaderOnly } from '~/layouts'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
