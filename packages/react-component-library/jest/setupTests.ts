import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import 'babel-polyfill'

configure({ adapter: new EnzymeAdapter() })
