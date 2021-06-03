import FFFDiscover from '@/pages/discover'
import FFFMine from '@/pages/mine'
import FFFFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    component: FFFDiscover
  },
  {
    path: '/mine',
    component: FFFMine
  },
  {
    path: '/frined',
    component: FFFFriend
  }
]

export default routes