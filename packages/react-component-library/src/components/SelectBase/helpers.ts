import { isNil } from 'lodash'

import { ItemsMap } from './types'

function getSelectedItem(value: string | null | undefined, itemsMap: ItemsMap) {
  return !isNil(value) && value in itemsMap ? value : null
}

function itemToString(item: string | null, itemsMap: ItemsMap) {
  return !isNil(item) && item in itemsMap ? itemsMap[item].props.children : ''
}

export { getSelectedItem, itemToString }
