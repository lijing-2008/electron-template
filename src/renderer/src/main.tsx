import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './assets/index.css'
import './tailwindmain.css'
import App from './App'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00b96b',
          borderRadius: 4,
          // 派生变量，影响范围小
          colorBgContainer: '#f6ffed'
        }
      }}
      locale={zhCN}
    >
      <App />
    </ConfigProvider>
  </HashRouter>
)
