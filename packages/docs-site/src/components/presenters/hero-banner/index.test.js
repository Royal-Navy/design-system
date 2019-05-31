import React from 'react'
import { render, cleanup } from "@testing-library/react"

import HeroBanner from './index'

afterEach(cleanup)

/* eslint-disable react/no-children-prop */

describe('HeroBanner', () => {
  
  const { getByTestId } = render(<HeroBanner title="Design your application using NELSON styles, components and patterns" text="Esse dolor eu fugiat anim cupidatat minim esse occaecat. Commodo aliquip elit quis proident excepteur est occaecat ea sunt dolor id commodo. Nisi occaecat irure mollit voluptate aliqua dolore cupidatat dolore officia. Ex sint esse do aliquip ut ullamco minim labore cupidatat excepteur consectetur anim dolor. Dolore ad Lorem deserunt aliqua Lorem excepteur." ctaLink="/test" ctaText="Get Started"/>)

  const title = getByTestId('hero-banner-title')
  const text = getByTestId('hero-banner-text')
  const cta = getByTestId('hero-banner-cta')

  test("Displays the correct title", () => {  
    expect(title).toHaveTextContent("Design your application using NELSON styles, components and patterns")
  })

  test("Displays the correct text", () => {  
    expect(text).toHaveTextContent("Esse dolor eu fugiat anim cupidatat minim esse occaecat. Commodo aliquip elit quis proident excepteur est occaecat ea sunt dolor id commodo. Nisi occaecat irure mollit voluptate aliqua dolore cupidatat dolore officia. Ex sint esse do aliquip ut ullamco minim labore cupidatat excepteur consectetur anim dolor. Dolore ad Lorem deserunt aliqua Lorem excepteur.")
  })
  test("Displays the correct Call To Action text", () => {  
    expect(cta).toHaveTextContent("Get Started")
  })
  test("Call to action links to the correct place", () => {  
    expect(cta.getAttribute('href')).toBe("/test")
  })
})
