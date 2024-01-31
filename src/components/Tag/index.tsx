import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string | boolean
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
