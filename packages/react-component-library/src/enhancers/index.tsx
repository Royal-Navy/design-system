import { TextInput, Checkbox, Radio } from '../components'
import withFormik from './withFormik'

const Formik: object = {
  // Enhanced components
  TextInput,
  Checkbox,
  Radio,
  // ...
}

Object.keys(Formik).forEach(key => {
  Formik[key] = withFormik(Formik[key])
})

export { Formik, withFormik }
