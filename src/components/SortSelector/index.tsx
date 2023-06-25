import * as Select from '@radix-ui/react-select'
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectViewport,
  SelectItem,
  SelectItemIndicator,
} from './styles'
import { CaretDown, CaretLeft } from '@phosphor-icons/react'

export interface SortSelectorProps {
  categories: string[]
  orderBy: string
  onOrderByChange: (orderBy: string) => void
}

export function SortSelector({
  categories,
  orderBy,
  onOrderByChange,
}: SortSelectorProps) {
  return (
    <Select.Root value={orderBy} onValueChange={onOrderByChange}>
      <SelectTrigger>
        <Select.Value aria-label={orderBy}>{orderBy}</Select.Value>
        <SelectIcon>
          <CaretDown size={16} weight="fill" />
        </SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent position="popper" sideOffset={2} align="center">
          <SelectViewport>
            {categories.map((orderBy) => (
              <SelectItem key={orderBy} value={orderBy}>
                <Select.ItemText>{orderBy}</Select.ItemText>
                <SelectItemIndicator>
                  <CaretLeft size={16} weight="fill" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}
