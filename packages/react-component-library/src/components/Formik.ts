import { TextInput, Checkbox, Radio } from '.'
import FormikSwitch from './Switch/adapters/FormikSwitch'
import withFormik from '../enhancers/withFormik'

/**
 * Enhanced primitives
 */
const EnhancedPrimitives: object = {
  TextInput,
  Checkbox,
  Radio,
  // ...
}

Object.keys(EnhancedPrimitives).forEach(key => {
  EnhancedPrimitives[key] = withFormik(EnhancedPrimitives[key])
})

/**
 * Enhanced custom components (via adapters)
 */
const EnhancedCustomComponents: object = {
  Switch: FormikSwitch
  // ...
}

/**
 * All enhanced form components
 */
const Formik: object = {
  ...EnhancedPrimitives,
  ...EnhancedCustomComponents
}

export { EnhancedPrimitives, EnhancedCustomComponents, Formik }
