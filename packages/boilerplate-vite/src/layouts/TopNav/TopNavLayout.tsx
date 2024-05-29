import { Masthead } from '@royalnavy/react-component-library'
import { ApplicationConstants } from '../../constants.ts'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths.ts'

export const TopNavLayout = () => {
  return (
    <>
      <Masthead
        title={ApplicationConstants.title}
        homeLink={<Link to={Paths.home} />}
      />
      <div>Hello top navs</div>
    </>
  )
}
