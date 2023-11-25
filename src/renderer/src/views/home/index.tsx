import { FC, memo, ReactNode, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Avatar, Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import HackImg from '@renderer/assets/hacker.png'

interface IProps {
  children?: ReactNode
}

const { Header, Sider, Content } = Layout
const Home: FC<IProps> = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e)
    navigate(`/home/${e.key}`)
  }
  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="w-full h-8 bg-amber-40 border flex justify-center items-center">
          <img className="h-6" src={HackImg} alt="hacker" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={[
            {
              key: 'main',
              icon: <HomeOutlined />,
              label: '主页'
            },
            {
              key: 'nav1',
              icon: <VideoCameraOutlined />,
              label: 'nav 1'
            },
            {
              key: 'nav2',
              icon: <UploadOutlined />,
              label: 'nav 2'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className="flex justify-between items-center p-2 bg-white">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Avatar className="bg-green-600 cursor-pointer" icon={<UserOutlined />} />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(Home)
