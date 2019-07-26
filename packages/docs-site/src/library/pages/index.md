---
title: Home
description: ''
tags: public
pageClass: ''
context: ''
status: ''
template: home
index: 0
header: false
---

import Card from '../../components/presenters/card'

<section class="m:h_f m:h_f-align-start h_mt-8 m:h_mb-16">
  <Card 
    type="border" 
    title="Styles" 
    text="Make your service look like it's for the Royal Navy with guides for applying colour, typography and spacing." 
    linkText="View styles" 
    linkHref="/styles"
    className="m:h_f-1 m:h_mr-4"
  />

  <Card 
    type="border" 
    title="Components" 
    text="Save time with reusable, accessible components for forms, navigation, cards and more." 
    linkText="View components" 
    linkHref="/components" 
    className="m:h_f-1  m:h_ml-4 h_mt-8 m:h_mt-0"
  />
</section>

<section class="home--info">
  <h2 class="home__title">Latest updates</h2>
  <div class="m:h_f m:h_f-align-start">
  <Card 
    type="coloured" 
    title="Standards v1.0.0 released" 
    meta="25th July 2019"
    text={<span>This launch includes the new Standards website providing 'get started' guides for designers and developers, styling and component usage guidelines, and information about Standards for Royal Navy stakeholders. Please <a href="/contact">get in touch</a> if you have any feedback.</span>}
    className="m:h_f-1 home--updates"
  />

  <Card
    type="borderless" 
    title="Contact us" 
    text="Contact the NELSON Standards team to find out more about design in the Royal Navy, request a new component, ask questions and give feedback." 
    linkText="Contact" 
    linkHref="/contact"
    className="m:h_f-1 home--contact"
  />
  </div>
</section>