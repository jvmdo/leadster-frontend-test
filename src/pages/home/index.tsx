import { ContentBox } from '@/layouts/DefaultLayout/components/ContentBox'
import {
  CallToActionContainer,
  CallToActionContent,
  CallToActionHero,
} from './styles'
import Image from 'next/image'
import { BrandButton } from '@/components/BrandButton'
import { MainContent } from './components/MainContent'
import videos from '../../../public/videos.json'

export default function Home() {
  const rating = 4.9
  const filterItems = [
    'Agências',
    'Chatbot',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ]
  const sortItems = ['Data de Publicação', 'A-Z']

  return (
    <>
      <MainContent
        filterItems={filterItems}
        sortItems={sortItems}
        videos={videos}
      />
      <CallToActionContainer>
        <ContentBox>
          <CallToActionHero
            src="/comparativo.png"
            width={739}
            height={687}
            alt="Gráfico comparativo entre os resultados da Leadster e concorrentes. Em 14 dias, a Leadster alcança 450 leads. 220 leads à frente do segundo colocado."
          />
          <CallToActionContent>
            <hgroup>
              <h2>
                Pronto para triplicar sua <strong>Geração de Leads?</strong>
              </h2>
              <p>
                Criação e ativação em <strong>4 minutos</strong>.
              </p>
            </hgroup>
            <hr />
            <div className="action">
              <BrandButton>Ver demonstração</BrandButton>
              <Image
                src="/selo.png"
                width={205}
                height={73}
                alt="Selo top 10 apps mais usados - RD Station"
              />
            </div>
            <div className="rating">
              <p>Não é necessário cartão de crédito</p>
              <p>
                {/* <Rating value={rating} fractions={10} readOnly /> */}
                <Image src="/rating.webp" width={92} height={16} alt="" />
                {rating}/5 média de satisfação
              </p>
            </div>
          </CallToActionContent>
        </ContentBox>
      </CallToActionContainer>
    </>
  )
}
