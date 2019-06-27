---
title: Home
description: ''
tags: public
pageClass: ''
context: ''
status: ''
template: default
index: 0
---

import HeroBanner from '../../components/presenters/hero-banner'
import Card from '../../components/presenters/card'

<HeroBanner 
  title="Design your application using NELSON styles and components" text="Use this design system to build applications and services for the Royal Navy. The website includes guidance, a component library and prototyping tools. Use these to save time and give users a consistent experience that meets the NELSON Standard." 
  ctaText="Get started" 
  ctaLink="/get-started"
/>

<section class="h_f h_f-align-start h_mt-8 h_mb-8">
  <Card 
    type="border" 
    title="Styles" 
    text="Make your service look like it's for the Royal Navy with guides for applying colour, typography and spacing." 
    linkText="View styles" 
    linkHref="/styles"
    className="h_f-1 h_mr-4"
  />

  <Card 
    type="border" 
    title="Components" 
    text="Save time with reusable, accessible components for forms, navigation, cards and more." 
    linkText="View components" 
    linkHref="/components" 
    className="h_f-1  h_ml-4"
  />
</section>

<section class="h_mt-8 h_mb-8">
  <h2>Latest updates</h2>

  <Card 
    type="coloured" 
    title="Standards v1.0.0 released" 
    meta="10th July 2019"
    text={<span>This launch includes the new Standards website providing 'get started' guides for designers and developers, styling and component usage guidelines, and information about Standards for Royal Navy stakeholders. Please <a href="/contact">get in touch</a> if you have any feedback.</span>}
  />
</section>

<section class="h_mt-8 h_mb-8">
  <Card 
    type="borderless" 
    title="Contact us" 
    text="Contact the NELSON Standards team to find out more about design in the Royal Navy, request a new component, ask questions and give feedback." 
    linkText="Contact" 
    linkHref="/contact" 
  />
</section>
