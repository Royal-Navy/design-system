import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { NumberInputE } from '../../components/NumberInputE'
import { SwitchE, SwitchEOption } from '../../components/SwitchE'
import { RangeSliderE } from '../../components/RangeSliderE'
import { ButtonE } from '../../components/ButtonE'
import { Fieldset } from '../../components/Fieldset'
import { useNativeForm } from './useNativeForm'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleRadio: string[]
  exampleSwitch: string
  exampleNumberInput: number
  exampleRangeSlider: readonly [number, number?]
}

export const Example: React.FC<unknown> = () => {
  const {
    formErrors,
    formPayload,
    formState,
    handleChange,
    handleCheckboxGroup,
    handleRadioGroup,
    isSubmitting,
    onSubmit,
  } = useNativeForm<FormValues>(
    {
      email: '',
      password: '',
      description: '',
      exampleCheckbox: [],
      exampleRadio: [],
      exampleSwitch: '',
      exampleNumberInput: null,
      exampleRangeSlider: [20],
    },
    {
      email: true,
      // ...
    },
    {
      email: (value: string): boolean => !value,
      // ...
    }
  )

  return (
    <main>
      <form onSubmit={onSubmit}>
        <TextInputE
          type="email"
          name="email"
          label="Email"
          value={formState.email}
          onChange={handleChange}
          isInvalid={formErrors.email}
          data-testid="form-example-TextInputE-email"
        />
        {formErrors.email && <span>Required</span>}
        <TextInputE
          type="password"
          name="password"
          label="Password"
          value={formState.password}
          onChange={handleChange}
          data-testid="form-example-TextInputE-password"
        />
        <TextAreaE
          name="description"
          label="Description"
          value={formState.description}
          onChange={handleChange}
          data-testid="form-example-TextAreaE-description"
        />
        <Fieldset>
          <legend>Example checkbox selection</legend>
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 1"
            value="Option 1"
          />
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 2"
            value="Option 2"
          />
          <CheckboxE
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 3"
            value="Option 3"
          />
        </Fieldset>
        <Fieldset>
          <legend>Example radio selection</legend>
          <RadioE
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 1"
            value="Option 1"
          />
          <RadioE
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 2"
            value="Option 2"
          />
        </Fieldset>
        <SwitchE
          name="exampleSwitch"
          label="Example switch selection"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChange({
              currentTarget: {
                name: 'exampleSwitch',
                value: e.currentTarget.value,
              },
            })
          }
          value={formState.exampleSwitch}
          data-testid="form-example-SwitchE"
        >
          <SwitchEOption label="One" value="1" />
          <SwitchEOption label="Two" value="2" />
          <SwitchEOption label="Three" value="3" />
        </SwitchE>
        <NumberInputE
          name="exampleNumberInput"
          label="Example number input"
          onChange={(
            _:
              | React.ChangeEvent<HTMLInputElement>
              | React.MouseEvent<HTMLButtonElement>,
            newValue: number
          ) => {
            handleChange({
              currentTarget: {
                name: 'exampleNumberInput',
                value: newValue,
              },
            })
          }}
          value={formState.exampleNumberInput}
          data-testid="form-example-NumberInputE"
        />
        <RangeSliderE
          onChange={(values: ReadonlyArray<number>) => {
            handleChange({
              currentTarget: {
                name: 'exampleRangeSlider',
                value: values as [],
              },
            })
          }}
          values={formState.exampleRangeSlider}
          domain={[0, 40]}
          mode={1}
          tracksLeft
          step={2}
        />
        <ButtonE
          type="submit"
          data-testid="form-example-submit"
          isDisabled={isSubmitting}
        >
          Submit
        </ButtonE>
      </form>

      <pre data-testid="form-example-values">
        {JSON.stringify(formPayload, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Native',
  component: Example,
} as ComponentMeta<typeof Example>
