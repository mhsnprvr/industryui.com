/**
 * Container
 */

// Style
import { ThemeProvider } from 'styled-components'

// UI
import { Theme, ThemeStyle } from '../'

export const Container = ({ story }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div>{story()}</div>
      <ThemeStyle />
    </ThemeProvider>
  )
}
