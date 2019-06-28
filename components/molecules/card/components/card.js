/**
 * Card
 */

// React
import { any, bool, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Close, Icon, Link } from '../../../'
import { CONTEXT } from '../../../theme'
import { CardBody, CardFooter, CardHeader, CardImage } from './'

// Style
import styled from 'styled-components'

export const Card = ({
  alt,
  body,
  bordered,
  center,
  children,
  className,
  close,
  context,
  footer,
  footerContext,
  header,
  icon,
  image,
  shadow,
  style,
  title,
  to
}) => {
  const linked = () => {
    return (
      <Link to={to} passHref>
        <StyledLink>
          {card()}
        </StyledLink>
      </Link>
    )
  }

  const card = () => {
    return (
      <StyledCard
        bordered={bordered}
        className={className}
        context={context}
        shadow={shadow}
        style={style}
      >
        {close && <Close click={close} /> }

        {image && <CardImage alt={alt} src={image} /> }

        {header && <CardHeader content={header} context={footerContext} /> }

        {icon && <StyledIcon icon={icon} size='4x' /> }

        {(title || body) &&
          <CardBody
            center={center}
            children={body}
            context={context}
            title={title}
          />
        }

        {!body && children}

        {footer && <CardFooter context={footerContext} footer={footer} />}

      </StyledCard>
    )
  }

  return to ? linked() : card()
}

Card.propTypes = {
  alt: string,
  body: node,
  bordered: bool,
  center: bool,
  children: node,
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  footer: string,
  fullHeight: bool,
  header: string,
  to: oneOfType([
    object,
    string
  ]),
  horizontal: bool,
  icon: string,
  image: string,
  role: string,
  shadow: bool,
  style: object,
  title: string
}

Card.defaultProps = {
  context: 'white',
  footerContext: 'light',
  role: 'article'
}

const StyledCard = styled.div`
  background-clip: border-box;
  background-color: ${({ context, theme }) => theme.COLOUR[context]}
  border: ${({ bordered }) => bordered && '1px solid rgba(0, 0, 0, .125)'};
  border-radius: .25rem;
  box-shadow: ${({ shadow }) => shadow && '0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08)'};
  color: ${({ context, theme }) => (context === 'light' || context === 'white') ? theme.COLOUR.dark : theme.COLOUR.white}}
  display: flex;
  flex-direction: column;
  font-size: inherit;
  margin: .5rem 0;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
`

const StyledIcon = styled(Icon)`
  margin: 1rem auto;
`

const StyledLink = styled.a`
  text-decoration: none;
`