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
excludeFromNavigation: true
---

import Card from '../../components/presenters/card'
import packageJson from '../../../package.json'

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
    title={`Standards v${packageJson.version} released`}
    text={<span>The latest release is on <a href="https://www.npmjs.com/package/@royalnavy/react-component-library">NPM</a> and the source is available on <a href="https://github.com/Royal-Navy/standards-toolkit">GitHub</a>. Please <a href="/contact">get in touch</a> if you have any feedback.</span>}
    className="m:h_f-1 home--updates"
  />

  <Card
    type="borderless" 
    title="Contact us" 
    text={<span>Contact the <strong>NELSON Standards</strong> team to find out more about design in the Royal Navy. Request a new component, ask questions and give feedback."</span>}
    linkText="Contact" 
    linkHref="/contact"
    className="m:h_f-1 home--contact"
  />
  </div>
</section>
