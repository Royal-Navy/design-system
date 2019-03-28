import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Table', module)

stories.addDecorator(withKnobs)

stories.add('Simple', () => (
  <table class="rn-table">
    <thead>
      <th>Ferry Name</th>
      <th>In Service</th>
      <th>From</th>
      <th>To</th>
      <th>Capacity</th>
    </thead>
    <tbody>
      <tr>
        <td>St Faith</td>
        <td>2001</td>
        <td>Isle of Wight</td>
        <td>Portsmouth</td>
        <td>500</td>
      </tr>
      <tr>
        <td>St Cecilia</td>
        <td>2003</td>
        <td>Portsmouth</td>
        <td>Southampton</td>
        <td>340</td>
      </tr>
      <tr>
        <td>St Clare</td>
        <td>1993</td>
        <td>Portsmouth</td>
        <td>Isle of Wight</td>
        <td>225</td>
      </tr>
      <tr>
        <td>Wight Sun</td>
        <td>2008</td>
        <td>Gosport</td>
        <td>Portsmouth</td>
        <td>65</td>
      </tr>
    </tbody>
  </table>
))

stories.add('Caption', () => (
  <table class="rn-table">
    <thead>
      <th>Ferry Name</th>
      <th>In Service</th>
      <th>From</th>
      <th>To</th>
      <th>Capacity</th>
    </thead>
    <tbody>
      <tr>
        <td>St Faith</td>
        <td>2001</td>
        <td>Isle of Wight</td>
        <td>Portsmouth</td>
        <td>500</td>
      </tr>
      <tr>
        <td>St Cecilia</td>
        <td>2003</td>
        <td>Portsmouth</td>
        <td>Southampton</td>
        <td>340</td>
      </tr>
      <tr>
        <td>St Clare</td>
        <td>1993</td>
        <td>Portsmouth</td>
        <td>Isle of Wight</td>
        <td>225</td>
      </tr>
      <tr>
        <td>Wight Sun</td>
        <td>2008</td>
        <td>Gosport</td>
        <td>Portsmouth</td>
        <td>65</td>
      </tr>
    </tbody>
    <caption class="rn-table__caption">Test Caption</caption>
  </table>
))
