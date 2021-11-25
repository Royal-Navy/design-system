/// <reference types="cypress/types/chai" />
/// <reference types="cypress/types/chai-jquery" />

export {}

chai.use((_chai) => {
  function hasBorder(
    borderProperty: 'color' | 'style' | 'width',
    value: string
  ) {
    // eslint-disable-next-line no-underscore-dangle
    const $element = this._obj

    ;['top', 'right', 'bottom', 'left'].forEach((side) => {
      new _chai.Assertion($element).to.have.css(
        `border-${side}-${borderProperty}`,
        value
      )
    })
  }

  _chai.Assertion.addMethod('border', hasBorder)
})
