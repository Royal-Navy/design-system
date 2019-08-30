import TextInput from '../components/TextInput'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'

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
