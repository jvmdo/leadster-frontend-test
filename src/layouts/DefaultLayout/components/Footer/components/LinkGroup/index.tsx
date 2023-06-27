import Link from 'next/link'
import { LinkGroupContainer } from './styles'

interface LinkGroupProps {
  title: string
  links: Array<{ name: string; href: string }>
}

export function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <LinkGroupContainer className="link-group">
      <h3>{title}</h3>
      <ul>
        {links.map(({ href, name }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </LinkGroupContainer>
  )
}

LinkGroup.toString = () => '.link-group'
