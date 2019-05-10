import React from 'react'
import IconList from '../icon-list'

export default ({ icons }) => {
  const allIcons = icons.allIcons.edges
  const categorySet = new Set(allIcons.map(item => item.node.category))
  const categories = []
  categorySet.forEach(v => categories.push(v))

  const iconList = categories.map((category, index) => {
    const sortedList = []

    allIcons.map(icon => {
      if (icon.node.category === category) {
        return sortedList.push(icon.node)
      }
      return false
    })

    return {
      index,
      category,
      sortedList,
    }
  })

  return iconList.map(icon => (
    <IconList
      key={`category-${icon.index}`}
      category={icon.category}
      icons={icon.sortedList}
    />
  ))
}
