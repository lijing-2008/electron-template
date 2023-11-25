import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Nav1: FC<IProps> = () => {
  return <div>nav1</div>
}

export default memo(Nav1)
