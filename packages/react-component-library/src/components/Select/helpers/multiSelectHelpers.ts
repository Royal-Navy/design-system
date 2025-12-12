import { useMultipleSelection, useSelect } from 'downshift'

type MultiSelectStateChangeType = string
type SelectStateChangeType = string

/**
 * Maps Downshift state change types to their corresponding actions
 */
const MULTI_SELECTION_REMOVE_ACTIONS = new Set<string>([
  useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace,
  useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete,
  useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace,
  useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem,
])

const SELECT_ITEM_ACTIONS = new Set<string>([
  useSelect.stateChangeTypes.MenuKeyDownEnter,
  useSelect.stateChangeTypes.MenuKeyDownSpaceButton,
  useSelect.stateChangeTypes.ItemClick,
])

/**
 * Determines if the state change type represents a removal action in multi-select
 */
export function isRemovalAction(type: MultiSelectStateChangeType): boolean {
  return MULTI_SELECTION_REMOVE_ACTIONS.has(type)
}

/**
 * Determines if the state change type represents an item selection action
 */
export function isSelectionAction(type: SelectStateChangeType): boolean {
  return SELECT_ITEM_ACTIONS.has(type)
}

/**
 * Toggles an item in the selected items array
 * If item exists, removes it. If it doesn't exist, adds it.
 */
export function toggleItemInArray(
  items: string[],
  itemToToggle: string
): string[] {
  const index = items.indexOf(itemToToggle)

  if (index === -1) {
    return [...items, itemToToggle]
  }

  return items.filter((_, i) => i !== index)
}
