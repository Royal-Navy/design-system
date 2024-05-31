import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { List, ListItem, Masthead } from '@royalnavy/react-component-library'
import { ApplicationConstants } from '../../constants.ts'
import { StyledApp } from './partials'
import { Links } from '../../constants.ts'

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
          {Links.map((link) => (
            <ListItem
              title={link.title}
              onClick={() => handleClick(link.route)}
            >
              {link.description}
            </ListItem>
          ))}
        </List>
      </StyledContents>
    </StyledApp>
  )
}
