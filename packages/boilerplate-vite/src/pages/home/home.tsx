import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, Masthead } from '@royalnavy/react-component-library'
import { Paths } from '../../paths.ts'
import { ApplicationConstants } from '../../constants.ts'
import { StyledApp } from './partials'

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
    <StyledApp>
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
            title="Side Navigation #2"
            onClick={() => handleClick(Paths.sideNavOutside)}
          >
            Using SideNav 2
          </ListItem>
          <ListItem
            title="Top navigation"
            onClick={() => handleClick(Paths.topNav)}
          >
            Using masthead navigation at the top of the page
          </ListItem>
        </List>
      </StyledContents>
    </StyledApp>
  )
}
