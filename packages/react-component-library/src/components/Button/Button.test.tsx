import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { Button } from './index'

describe('Button', () => {
  describe('Given a button is created with a listener for onClick', () => {
    let component: ShallowWrapper
    let onClick: (event: React.SyntheticEvent) => void

    beforeEach(() => {
      onClick = jest.fn()
      component = shallow(<Button onClick={onClick}>Hello World</Button>)
    })

    describe('and a user clicks on the button', () => {
      let event: any

      beforeEach(() => {
        event = {
          currentTarget: {
            blur: jest.fn(),
          },
        }

        component.simulate('click', event)
      })

      it('should call the handler when the button is clicked', () => {
        expect(onClick).toHaveBeenCalled()
      })

      it('should blur the button so it does not remain active', () => {
        expect(event.currentTarget.blur).toHaveBeenCalled()
      })
    })
  })
})
