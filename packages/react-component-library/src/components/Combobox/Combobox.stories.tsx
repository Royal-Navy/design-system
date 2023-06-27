import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { Combobox } from '.'
import { AutocompleteOption } from '../Autocomplete'

export default {
  component: Combobox,
  title: 'Combobox',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    label: 'Combobox label',
  },
} as ComponentMeta<typeof Combobox>

const StyledWrapper = styled.div<{ $isDisabled?: boolean }>`
  height: ${({ $isDisabled }) => ($isDisabled ? 'initial' : '18rem')};
  max-width: 20rem;
`

const Template: ComponentStory<typeof Combobox> = (args) => {
  const [{ value, text, isNew }, setValues] = useState<{
    isNew?: boolean
    value: string
    text: string
  }>({
    isNew: false,
    value: '',
    text: '',
  })

  // console.table({ isNew, value, text })

  return (
    <StyledWrapper $isDisabled={args.isDisabled}>
      <Combobox
        {...args}
        onNotInList={(newValue) => {
          setValues((p) => {
            return { value: '', text: newValue, isNew: true }
          })
        }}
        onChange={(changedValue) => {
          setValues((p) => {
            return { isNew: false, text: '', value: changedValue || '' }
          })
        }}
      >
        <AutocompleteOption value='one'>One</AutocompleteOption>
        <AutocompleteOption value='two'>Two</AutocompleteOption>
        <AutocompleteOption value='three'>Three</AutocompleteOption>
        <AutocompleteOption value='catchall'>The quick brown fox jumps over the lazy dog</AutocompleteOption>
      </Combobox>
    </StyledWrapper>
  )
}

export const Default = Template.bind({})
