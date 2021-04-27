---
title: Date Picker
description: The Date Picker component lets the user pick a date from a calender dropdown widget.
header: true
---

import DatePickerComponent from '../../images/components/date-picker/Component'
import DatePickerAnatomy from '../../images/components/date-picker/Anatomy'
import DateRangePickerComponent from '../../images/components/date-picker/Daterangecomponent'

import Bucket from '../../../components/presenters/bucket'

<div className="bucket__container">
  <Bucket type="sketch" url="https://docs.royalnavy.io/design-system.sketch" />
  <Bucket type="storybook" url="https://storybook.royalnavy.io/?path=/docs/date-picker--default" />
</div>

# Overview
The Date Picker component lets the user pick a date from a calender dropdown widget.

<DatePickerComponent />

## Usage
This component can be used as a standalone component or as part of a form, alongside other inputs.

## Anatomy

<DatePickerAnatomy />

1. **Date Picker Input.** This component displays the currently selected date.
2. **Calendar Widget.** Provides a graphical way for the user to select a date.

### Sizing & Spacing
The date picker component is sized to sit next to input components within a form.

## Date Picker with Range Selection

The Date Picker with Range Selection component is very similar to the standard Date Picker. This component lets the user select both a start and end date, using two calendar widgets.

<DateRangePickerComponent />
