import React from 'react'
import { Redirect } from 'react-router'

import FFFDiscover from '@/pages/discover'
import FFFMine from '@/pages/mine'
import FFFFriend from '@/pages/friend'
import FFFPlayer from '@/pages/player'

import FFFRecommend from '@/pages/discover/c-pages/recommend'
import FFFSongs from '@/pages/discover/c-pages/songs'
import FFFRanking from '@/pages/discover/c-pages/ranking'
import FFFDjradio from '@/pages/discover/c-pages/djradio'
import FFFAlbum from '@/pages/discover/c-pages/album'
import FFFArtist from '@/pages/discover/c-pages/artist'


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