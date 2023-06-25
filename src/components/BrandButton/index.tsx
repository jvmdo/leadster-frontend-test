import { ComponentProps } from 'react'
import { BrandButtonContainer } from './styles'

// TODO: extend Stitches polymorphism

interface BrandButtonProps
  extends ComponentProps<typeof BrandButtonContainer> {}

export function BrandButton({ children, ...props }: BrandButtonProps) {
  return <BrandButtonContainer {...props}>{children}</BrandButtonContainer>
}
