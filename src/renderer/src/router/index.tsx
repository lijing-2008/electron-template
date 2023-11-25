import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../views/home'))
const Main = lazy(() => import('../views/home/main'))
const Nav1 = lazy(() => import('../views/home/nav1'))
const Nav2 = lazy(() => import('../views/home/nav2'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Main />
      },
      {
        path: '/home/main',
        element: <Main />
      },
      {
        path: '/home/nav1',
        element: <Nav1 />
      },
      {
        path: '/home/nav2',
        element: <Nav2 />
      }
    ]
  }
]
export default routes
