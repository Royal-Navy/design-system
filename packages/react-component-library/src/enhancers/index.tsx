import { TextInput } from '../components/TextInput'
import { Checkbox } from '../components/Checkbox'
import { Radio } from '../components/Radio'
import { Select } from '../components/Select'

import withFormik from './withFormik'

const Formik: object = {
  // Enhanced components
  TextInput,
  Checkbox,
  Radio,
  Select,
  // ...
}

Object.keys(Formik).forEach((key) => {
  Formik[key] = withFormik(Formik[key])
})

export { Formik, withFormik }
