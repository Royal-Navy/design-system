import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import State from '@royalnavy/storybook-react-input-state'

import AutoSuggest from './index'

export const suggestions = [
  {
    label: 'Ashley',
    town: 'Hull',
  },
  {
    label: 'Dixie',
    town: 'Portsmouth',
  },
  {
    label: 'Hayden',
    town: 'Colchester',
  },
  {
    label: 'Chen',
    town: 'London',
  },
  {
    label: 'Lowe',
    town: 'Bognor Regis',
  },
  {
    label: 'Ginger',
    town: 'Hull',
  },
  {
    label: 'Reynolds',
    town: 'London',
  },
  {
    label: 'Kirby',
    town: 'Birmingham',
  },
  {
    label: 'Hester',
    town: 'London',
  },
  {
    label: 'Rutledge',
    town: 'London',
  },
  {
    label: 'Rosalinda',
    town: 'Ipswich',
  },
  {
    label: 'Tisha',
    town: 'Liverpool',
  },
  {
    label: 'Mcgee',
    town: 'Guildford',
  },
  {
    label: 'Rowe',
    town: 'London',
  },
  {
    label: 'Aida',
    town: 'Guildford',
  },
  {
    label: 'Lane',
    town: 'Manchester',
  },
  {
    label: 'Shelly',
    town: 'York',
  },
  {
    label: 'Jeannine',
    town: 'Edinburgh',
  },
  {
    label: 'Allen',
    town: 'Manchester',
  },
  {
    label: 'Enid',
    town: 'Bath',
  },
  {
    label: 'Duncan',
    town: 'Reading',
  },
  {
    label: 'Pruitt',
    town: 'Cardiff',
  },
  {
    label: 'Marshall',
    town: 'Belfast',
  },
  {
    label: 'Hewitt',
    town: 'Doncaster',
  },
  {
    label: 'Gloria',
    town: 'Hull',
  },
  {
    label: 'Guadalupe',
    town: 'Bath',
  },
  {
    label: 'Wagner',
    town: 'Birmingham',
  },
  {
    label: 'Madeleine',
    town: 'Southampton',
  },
  {
    label: 'Samantha',
    town: 'Northampton',
  },
  {
    label: 'Freeman',
    town: 'Norwich',
  },
  {
    label: 'Trisha',
    town: 'Brighton',
  },
  {
    label: 'Horton',
    town: 'Exeter',
  },
  {
    label: 'Erin',
    town: 'Sheffield',
  },
  {
    label: 'Bailey',
    town: 'Blackpool',
  },
  {
    label: 'Nona',
    town: 'Dublin',
  },
  {
    label: 'Dunlap',
    town: 'Oxford',
  },
  {
    label: 'Addie',
    town: 'Leeds',
  },
  {
    label: 'Earlene',
    town: 'Cambridge',
  },
  {
    label: 'Eleanor',
    town: 'Aberdeen',
  },
  {
    label: 'Tamara',
    town: 'Harrogate',
  },
  {
    label: 'Katherine',
    town: 'Bounemouth',
  },
  {
    label: 'Mcdaniel',
    town: 'Southend-on-sea',
  },
  {
    label: 'Alfreda',
    town: 'Stoke-on-Trent',
  },
  {
    label: 'Goldie',
    town: 'Canturbury',
  },
  {
    label: 'Morgan',
    town: 'Cheltenham',
  },
  {
    label: 'Gates',
    town: 'Doncaster',
  },
  {
    label: 'Barbara',
    town: 'Swansea',
  },
  {
    label: 'Martina',
    town: 'Bolton',
  },
  {
    label: 'Goff',
    town: 'Whitby',
  },
  {
    label: 'Nadia',
    town: 'Colchester',
  },
]

const stories = storiesOf('AutoSuggest', module)
stories.addDecorator(withKnobs)
stories.addParameters({
  info: {
    text: `This component is an implementation of react-autosuggest,
    see https://www.npmjs.com/package/react-autosuggest
    for full instructions on how to implement it.
    `,
    inline: true,
    header: false,
    propTablesExclude: [State],
  },
})

stories.add('Default', () => (
  <State>
    <AutoSuggest suggestions={object('suggestions', suggestions)} />
  </State>
))

stories.add('Custom placeholder', () => (
  <State>
    <AutoSuggest
      suggestions={suggestions}
      placeholder={text('Placeholder', 'Type "A"')}
    />
  </State>
))

stories.add('Custom filter', () => (
  <State>
    <AutoSuggest
      suggestions={suggestions}
      placeholder={text('Placeholder', 'Filter by town')}
      filter={text('Filter', 'town')}
    />
  </State>
))

stories.add('Custom filter and target', () => (
  <State>
    <AutoSuggest
      suggestions={suggestions}
      filter={text('Filter', 'town')}
      target={text('Target', 'town')}
    />
  </State>
))
