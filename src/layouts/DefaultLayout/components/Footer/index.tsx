import Image from 'next/image'
import { ContentBox } from '../ContentBox'
import {
  FooterContact,
  FooterContainer,
  FooterContent,
  FooterFoot,
  FooterHead,
  FooterSocials,
} from './styles'
import { SocialIcon } from '@/components/SocialIcon'
import { LinkGroup } from './components/LinkGroup'
import linksData from './../../../../../public/data/links.json'
import contactsData from './../../../../../public/data/contact.json'

export function Footer() {
  return (
    <FooterContainer>
      <ContentBox>
        <FooterHead>
          <Image
            src="/images/logo.png"
            width={268}
            height={56}
            alt="Leadster"
          />
          <p>Transformando visitantes em clientes.</p>
        </FooterHead>
        <FooterContent>
          {linksData.map(({ group }) => (
            <LinkGroup
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}
          <div className="contact-group">
            <h3>{contactsData.title}</h3>
            <FooterSocials>
              {contactsData.socials.map(({ name, href }) => (
                <li key={name}>
                  <a href={href}>{<SocialIcon label={name} />}</a>
                </li>
              ))}
            </FooterSocials>
            <FooterContact>
              <li>
                <span>{contactsData.contacts.email.name}: </span>
                <a href={`mailto:${contactsData.contacts.email.href}`}>
                  {contactsData.contacts.email.href}
                </a>
              </li>
              <li>
                <span>{contactsData.contacts.phone.name}: </span>
                <a href={`tel:${contactsData.contacts.phone.href}`}>
                  {contactsData.contacts.phone.href}
                </a>
              </li>
            </FooterContact>
          </div>
        </FooterContent>
        <FooterFoot>
          <p>
            Copyright &copy; 2015 - {new Date().getFullYear()} Todos os direitos
            reservados | <a href="#">Leadster</a>
          </p>
          <p>
            Rua Jośe Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
            <a href="#">Termos de uso</a>
          </p>
        </FooterFoot>
      </ContentBox>
    </FooterContainer>
  )
}
