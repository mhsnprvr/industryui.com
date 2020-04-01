/**
 * Layout - Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import { bool, node, object, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Container, MEDIA_QUERY, MetaHead, PageHeading } from '../../'

// Config
import { Brand, Canonical } from 'config'

export const Page = ({ children, fluid, meta, pageHeading }) => {
  return (
    <StyledPage>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.PAGE.backGroundColour};
  padding: 30px 0;

  ${MEDIA_QUERY.desktop`
    padding: 1rem 0.5rem;
  `}
`

Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
  pageHeading: object
}

Page.defaultProps = {
  fluid: false
}