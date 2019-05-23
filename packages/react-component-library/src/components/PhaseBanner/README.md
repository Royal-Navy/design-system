---
title: Phase Banner
description: A simple banner to indicate the phase of the project.
---

## Usage

The banner should be used directly underneath the main site header, before the content begins. If used with no props then it will look exactly like the example image below, however it can be customised to with any text that is required.

## Examples

<img src="images/example.gif" width="664" />

```
<PhaseBanner />
<PhaseBanner phase="beta"/>
<PhaseBanner html="Custom html can go here. <strong>This part is in bold!</strong>" />
<PhaseBanner phase="pre-alpha" html="Custom html can go here. <strong>This part is in bold!</strong>" />
```

<hr/>


## Properties

| Name      | Type           | Required | Default | Description                                                                                   
| --------- | -------------- | -------- | ------- | -----------
| phase     | String         | False    | `alpha` | Text to display in the phase banner badge
| html     | String         | False    | `This is a new service, <a href="">Your feedback</a> will help to improve it`, | HTML to display in the phase banner body

