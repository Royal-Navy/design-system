import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import dnaLogo from './../../assets/dna.svg'
import {
  Button,
  COMPONENT_SIZE,
  List,
  ListItem,
  Masthead,
  SectionDivider,
} from '@royalnavy/react-component-library'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths.ts'
import { ApplicationConstants } from '../../constants.ts'

const StyledContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = (location: string) => {
    navigate(location)
  }

  return (
    <>
      <Masthead title={ApplicationConstants.title} />
      <StyledContents>
        <List>
          <ListItem
            title="Side Navigation #1"
            onClick={() => handleClick(Paths.sideNav)}
          >
            Using SideNav
          </ListItem>
          <ListItem
            title="Top navigation"
            onClick={() => handleClick(Paths.topNav)}
          >
            <img src={dnaLogo} />
            Using masthead navigation at the top of the page
          </ListItem>
        </List>
      </StyledContents>
    </>
  )
}
