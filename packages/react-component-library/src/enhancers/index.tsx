import Components from '../components'
import withFormik from './withFormik'

const Formik: object = {
  // Enhanced components
  // ...
}

Object.keys(Components).forEach(key => {
  Formik[key] = withFormik(Components[key])
})

export { Formik, withFormik }
