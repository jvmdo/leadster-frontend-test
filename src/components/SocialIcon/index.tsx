import { SocialIconContainer } from './styles'

interface SocialIconProps {
  label: string
  size?: number
  viewBox?: string
}

export function SocialIcon({
  label,
  size = 32,
  viewBox = '0 0 32 32',
}: SocialIconProps) {
  return (
    <SocialIconContainer className="social-icon">
      <svg width={size} height={size} viewBox={viewBox}>
        <use xlinkHref={`/icons/sprite.svg#${label}`}></use>
      </svg>
    </SocialIconContainer>
  )
}

SocialIcon.toString = () => '.social-icon'
