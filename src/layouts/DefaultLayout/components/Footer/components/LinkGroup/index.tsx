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
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </LinkGroupContainer>
  )
}

LinkGroup.toString = () => '.link-group'
