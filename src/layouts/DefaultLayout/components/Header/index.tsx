import { ContentBox } from '../ContentBox'
import { HeaderContainer, HeaderContent, HeaderLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <ContentBox>
        <HeaderLogo
          src="/images/logo.png"
          width={200}
          height={84}
          alt="Leadster"
        />
        <HeaderContent>
          <hgroup>
            <p className="bubble">Webinars exclusivos</p>
            <h1>
              Menos conversinha, <span>mais conversão</span>
            </h1>
          </hgroup>
          <hr />
          <p>
            Conheça as estratégias que <strong>mudaram o jogo</strong> e como
            aplicá-las em seu negócio
          </p>
        </HeaderContent>
      </ContentBox>
    </HeaderContainer>
  )
}
