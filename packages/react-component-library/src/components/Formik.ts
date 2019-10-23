import {
  Checkbox,
  NumberInput,
  Radio,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '.'
import withFormik from '../enhancers/withFormik'

/**
 * Enhanced primitives
 */
const EnhancedPrimitives: object = {
  Checkbox,
  NumberInput,
  Radio,
  Select,
  Switch,
  TextArea,
  TextInput,
  // ...
}

Object.keys(EnhancedPrimitives).forEach(key => {
  EnhancedPrimitives[key] = withFormik(EnhancedPrimitives[key])
})

/**
 * Enhanced custom components (via adapters)
 */
const EnhancedCustomComponents: object = {
  // ...
}

/**
 * All enhanced form components
 */
const Formik: object = {
  ...EnhancedPrimitives,
  ...EnhancedCustomComponents,
}

export { EnhancedPrimitives, EnhancedCustomComponents, Formik }
