import { TextInput, Checkbox, Radio, Select } from '../components'
import withFormik from './withFormik'

const Formik: object = {
  // Enhanced components
  TextInput,
  Checkbox,
  Radio,
  Select,
  // ...
}

Object.keys(Formik).forEach(key => {
  Formik[key] = withFormik(Formik[key])
})

export { Formik, withFormik }
