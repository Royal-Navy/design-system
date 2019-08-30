import Components from '../components'
import withFormik from './withFormik'

const Formik: object = {
  // Enhanced components
  // ...
}

Object.keys(Components).map((key: string) => {
  Formik[key] = withFormik(Components[key])
})

export { Formik, withFormik }
