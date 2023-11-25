import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Nav2: FC<IProps> = () => {
  return <div>nav2</div>
}

export default memo(Nav2)
