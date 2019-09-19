import { TextInput, Checkbox, Radio, Select, Switch } from '.'
import withFormik from '../enhancers/withFormik'

/**
 * Enhanced primitives
 */
const EnhancedPrimitives: object = {
  TextInput,
  Checkbox,
  Radio,
  Select,
  Switch,
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
  ...EnhancedCustomComponents
}

export { EnhancedPrimitives, EnhancedCustomComponents, Formik }
