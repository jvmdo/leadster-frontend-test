import { CategoryChipsContainer, ToggleChip } from './styles'

export interface CategoryChipsProps {
  categories: string[]
  chips: string[]
  onChipsChange: (chips: string[]) => void
}

export function CategoryChips({
  categories,
  chips,
  onChipsChange,
}: CategoryChipsProps) {
  return (
    <CategoryChipsContainer
      type="multiple"
      value={chips}
      onValueChange={onChipsChange}
      orientation="horizontal"
    >
      {categories.map((category) => (
        <ToggleChip key={category} value={category}>
          {category}
        </ToggleChip>
      ))}
    </CategoryChipsContainer>
  )
}
