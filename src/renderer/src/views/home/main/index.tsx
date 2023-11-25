import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const handleClick = async () => {
    console.log('in')
    const res = await window.electron.ipcRenderer.invoke('ping', 'hello', 'world')
    console.log('get result:', res)
  }
  return (
    <div>
      <Button onClick={handleClick}>test</Button>
    </div>
  )
}

export default memo(Main)
