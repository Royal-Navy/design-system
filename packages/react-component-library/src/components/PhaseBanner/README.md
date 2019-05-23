---
title: Phase Banner
description: A simple banner to indicate the phase of the project.
---

## Usage

The banner should be used directly underneath the main site header, before the content begins. If used with no props then it will look exactly like the example image below (linking to /feedback), however it can be customised to with any text or link that is required.

## Examples

<img src="images/phase-banner-example.gif" width="664" />

```html
<PhaseBanner />
<PhaseBanner link="/my-custom-page" />
<PhaseBanner phase="beta"/>
<PhaseBanner>Custom html can go here. <strong>This part is in bold!</strong><PhaseBanner/>
```

<hr/>


## Properties

| Name      | Type           | Required | Default | Description                                                                                   
| --------- | -------------- | -------- | ------- | -----------
| phase     | String         | False    | `alpha` | Text to display in the phase banner badge
| link      | String         | False    | `/feedback`, | The link to use with the default message
| children  | Node           | False    | `This is a new service, <a href="">Your feedback</a> will help to improve it`, | HTML to display in the phase banner body

