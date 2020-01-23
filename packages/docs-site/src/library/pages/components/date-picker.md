---
title: Date Picker
description: The Date Picker component lets the user pick a date from a calender dropdown widget.
header: true
---

import { DatePicker, DATEPICKER_PLACEMENT, TabSet, Tab } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

import DatePickerComponent from '../../images/components/date-picker/Component'
import DatePickerAnatomy from '../../images/components/date-picker/Anatomy'
import DateRangePickerComponent from '../../images/components/date-picker/Daterangecomponent'

# Overview
The Date Picker component lets the user pick a date from a calender dropdown widget.

<DatePickerComponent />

## Usage
This component can be used as a standalone component or as part of a form, alongside other inputs.

<TabSet>
<Tab title="Design">

## Anatomy

<DatePickerAnatomy />

1. **Date Picker Input.** This component displays the currently selected date.
2. **Calendar Widget.** Provides a graphical way for the user to select a date.

### Sizing & Spacing
The date picker component is sized to sit next to input components within a form.


## Date Picker with Range Selection


The Date Picker with Range Selection component is very similar to the standard Date Picker. This component lets the user select both a start and end date, using two calendar widgets.

<DateRangePickerComponent />

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`<DatePicker
  startDate={new Date('11/01/2018')}
  onChange={() => { /* handle change */ }}
  placement={DATEPICKER_PLACEMENT.BELOW}
/>`} language="javascript">
<DatePicker
  startDate={new Date('11/01/2019')}
  onChange={() => { /* handle change */ }}
  placement={DATEPICKER_PLACEMENT.RIGHT}
/>
</CodeHighlighter>

### Date Picker with Range Selection
<CodeHighlighter source={`<DatePicker
  onChange={() => { /* handle change */ }}
  placement={DATEPICKER_PLACEMENT.BELOW}
  isRange
/>`} language="javascript">
<DatePicker
  onChange={() => { /* handle change */ }}
  placement={DATEPICKER_PLACEMENT.RIGHT}
  isRange
/>
</CodeHighlighter>

### Date Picker Properties
<DataTable data={[
  {
    Name: 'className',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Custom CSS class to add to the date picker',
  },
  {
    Name: 'isDisabled',
    Type: '',
    Required: 'False',
    Default: 'False',
    Description: 'If true then the input is disabled',
  },
  {
    Name: 'endDate',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Selects the specified date as the end date',
  },
  {
    Name: 'id',
    Type: '',
    Required: 'False',
    Default: 'uuid()',
    Description: 'ID for the input',
  },
  {
    Name: 'isRange',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Specifies whether the date picker is a range selection implying that the user can select a start date and an end date',
  },
  {
    Name: 'label',
    Type: '',
    Required: 'False',
    Default: 'Select Date',
    Description: 'Label for the date picker input',
  },
  {
    Name: 'name',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Name for the input',
  },
  {
    Name: 'onBlur',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Callback for when the input loses focus',
  },
  {
    Name: 'onChange',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Callback for when the start or end dates change',
  },
  {
    Name: 'placement',
    Type: '',
    Required: 'False',
    Default: 'DATEPICKER_PLACEMENT.BELOW',
    Description: 'Position of the date picker',
  },
  {
    Name: 'startDate',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Selects the specified date as the start date',
  },
  {
    Name: 'value',
    Type: '',
    Required: 'False',
    Default: '',
    Description: 'Value for the input',
  },
]} />

</Tab>
</TabSet>
