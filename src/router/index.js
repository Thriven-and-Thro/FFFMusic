import React from 'react'
import { Redirect } from 'react-router'

const FFFDiscover = React.lazy(() => import('@/pages/discover'))
const FFFMine = React.lazy(() => import('@/pages/mine'))
const FFFFriend = React.lazy(() => import('@/pages/friend'))
const FFFPlayer = React.lazy(() => import('@/pages/player'))

const FFFRecommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'))
const FFFSongs = React.lazy(() => import('@/pages/discover/c-pages/songs'))
const FFFRanking = React.lazy(() => import('@/pages/discover/c-pages/ranking'))
const FFFDjradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'))
const FFFAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'))
const FFFArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'))

const routes = [
  {
    path: '/',
    exact: true,
    // 重定向
    render: () => (
      <Redirect to='/discover' />
    )
    // component: FFFDiscover
  },
  {
    path: '/discover',
    component: FFFDiscover,
    routes: [
      // 通过设置一个路径相同的子路由并且重定向，使进入时能直接到子路由中
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        ),
      },
      {
        path: "/discover/recommend",
        component: FFFRecommend
      },
      {
        path: "/discover/ranking",
        component: FFFRanking
      },
      {
        path: "/discover/playlist",
        component: FFFSongs
      },
      {
        path: "/discover/djradio",
        component: FFFDjradio
      },
      {
        path: "/discover/artist",
        component: FFFArtist
      },
      {
        path: "/discover/album",
        component: FFFAlbum
      },
      {
        path: "/discover/songs",
        component: FFFPlayer
      }
    ]
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