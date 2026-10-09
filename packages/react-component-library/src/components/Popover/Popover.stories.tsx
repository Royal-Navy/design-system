import React, { useCallback, useState } from 'react'
import { StoryFn, Meta } from '@storybook/react-webpack5'
import styled from 'styled-components'
import { IconFilterList } from '@royalnavy/icon-library'
import { spacing } from '@royalnavy/design-tokens'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { Button, BUTTON_VARIANT } from '../Button'
import { DatePicker } from '../DatePicker'
import { Select, SelectOption } from '../Select'
import { TextInput } from '../TextInput'
import { Popover } from '.'

const StyledContent = styled.pre`
  padding: 1rem;
`

export default {
  component: Popover,
  title: 'Components/Popover',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    content: <StyledContent>This is some arbitrary JSX</StyledContent>,
  },
} as Meta<typeof Popover>

const Template: StoryFn<typeof Popover> = (args) => (
  <Popover {...args}>
    <div
      css={`
        display: inline-block;
        padding: 1rem;
        background-color: #c9c9c9;
      `}
    >
      {args.isClick ? 'Click on me' : 'Hover on me'}
    </div>
  </Popover>
)

export const Default = Template.bind({})

export const Dark = Template.bind({})
Dark.args = {
  scheme: FLOATING_BOX_SCHEME.DARK,
}

export const ClickToActivate = Template.bind({})
ClickToActivate.storyName = 'Click to activate'
ClickToActivate.args = {
  isClick: true,
}

export const Open = Template.bind({})
Open.args = {
  isVisible: true,
}

export const Multi: StoryFn<typeof Popover> = (args) => (
  <div>
    <Popover {...args}>
      <div
        css={`
          display: inline-block;
          padding: 1rem;
          background-color: #c9c9c9;
          margin-bottom: 10px;
        `}
      >
        Hover on me
      </div>
    </Popover>
    <br />
    <Popover {...args}>
      <div
        css={`
          display: inline-block;
          padding: 1rem;
          background-color: #c9c9c9;
          margin-bottom: 10px;
        `}
      >
        Hover on me
      </div>
    </Popover>
    <br />
    <Popover {...args}>
      <div
        css={`
          display: inline-block;
          padding: 1rem;
          background-color: #c9c9c9;
          margin-bottom: 10px;
        `}
      >
        Hover on me
      </div>
    </Popover>
  </div>
)
Multi.storyName = 'Multiple Popovers'
Multi.args = {}

const CATEGORIES = ['Documents', 'Images', 'Video', 'Audio']

const STATUSES = ['Draft', 'In review', 'Published', 'Archived']

const StyledFilterPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: ${spacing('8')};
  min-height: 40rem;
`

const StyledFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing('6')};
  width: 20rem;
  padding: ${spacing('4')};
`

const StyledFilterActions = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

const EMPTY_FILTERS = {
  search: '',
  dateRange: { startDate: null, endDate: null } as DateRange,
  categories: [] as string[],
  statuses: [] as string[],
}

type Filters = typeof EMPTY_FILTERS

function hasNoFilters({ search, dateRange, categories, statuses }: Filters) {
  return (
    search === '' &&
    dateRange.startDate === null &&
    dateRange.endDate === null &&
    categories.length === 0 &&
    statuses.length === 0
  )
}

interface FilterFormProps {
  filters: Filters
  onChange: (filters: Filters) => void
}

function FilterForm({ filters, onChange }: FilterFormProps) {
  const handleClear = useCallback(() => onChange(EMPTY_FILTERS), [onChange])

  return (
    <StyledFilterForm onSubmit={(event) => event.preventDefault()}>
      <TextInput
        id="filter-search"
        label="Search"
        name="search"
        onChange={(event) =>
          onChange({ ...filters, search: event.target.value })
        }
        value={filters.search}
      />
      <DatePicker
        endDate={filters.dateRange.endDate}
        id="filter-date-range"
        label="Date range"
        onChange={(dateRange) => onChange({ ...filters, dateRange })}
        startDate={filters.dateRange.startDate}
        isRange
        navigateMonthYear
      />
      <Select
        id="filter-category"
        label="Category"
        onChange={(categories) => onChange({ ...filters, categories })}
        value={filters.categories}
        isMulti
      >
        {CATEGORIES.map((category) => (
          <SelectOption key={category} value={category}>
            {category}
          </SelectOption>
        ))}
      </Select>
      <Select
        id="filter-status"
        label="Status"
        onChange={(statuses) => onChange({ ...filters, statuses })}
        value={filters.statuses}
        isMulti
      >
        {STATUSES.map((status) => (
          <SelectOption key={status} value={status}>
            {status}
          </SelectOption>
        ))}
      </Select>
      <StyledFilterActions>
        <Button
          isDisabled={hasNoFilters(filters)}
          onClick={handleClear}
          variant={BUTTON_VARIANT.TERTIARY}
        >
          Clear filters
        </Button>
      </StyledFilterActions>
    </StyledFilterForm>
  )
}

export const ClickWithForm: StoryFn<typeof Popover> = (args) => {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)

  return (
    <StyledFilterPage>
      <Popover
        {...args}
        content={<FilterForm filters={filters} onChange={setFilters} />}
      >
        <Button icon={<IconFilterList />} variant={BUTTON_VARIANT.SECONDARY}>
          Filter
        </Button>
      </Popover>
    </StyledFilterPage>
  )
}
ClickWithForm.storyName = 'Click to activate with a form'
ClickWithForm.args = {
  'aria-label': 'Filters',
  closeDelay: 0,
  isClick: true,
  placement: 'bottom-end',
}
ClickWithForm.parameters = {
  docs: {
    description: {
      story: `A click-activated Popover that only closes on an outside click,
with \`closeDelay\` set to \`0\` so it closes immediately. Content unmounts on
close, so form state lives in the parent. In a flex container, set
\`align-items: flex-start\` so the target does not stretch and misplace the
Popover.`,
    },
  },
}
