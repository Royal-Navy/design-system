import { Checkbox } from './Checkbox'
import { NumberInput } from './NumberInput'
import { Radio } from './Radio'
import { Select } from './Select'
import { Switch } from './Switch'
import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

import { withFormik } from '../enhancers/withFormik'

/**
 * Enhanced primitives
 */
const EnhancedPrimitives: Record<string, React.FC<any>> = {
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
const EnhancedCustomComponents: Record<string, React.FC<any>> = {
  // ...
}

/**
 * All enhanced form components
 */
const Formik: Record<string, React.FC<any>> = {
  ...EnhancedPrimitives,
  ...EnhancedCustomComponents,
}

export { EnhancedPrimitives, EnhancedCustomComponents, Formik }
