/**
 * Select
 */

// React
import { forwardRef } from 'react'
import { array, bool, object, string } from 'prop-types'

// Lodash
import _range from 'lodash/range'

// UI
import { FieldHOC } from '../'

// Style
import styled, { css } from 'styled-components'

export const SelectField = forwardRef(
  ({ data, defaultValue, disabled, options, placeholder, range, showError, ...props }, ref) => {
    const renderRange = () => {
      const options = [
        <option disabled value='' key='initial0'>
          {placeholder}
        </option>
      ]

      _range(range[1], range[0]).map(i =>
        options.push(
          <option key={`range${i}`} value={i}>
            {i}
          </option>
        )
      )

      return options
    }

    const renderOptions = items => {
      if (items) {
        options = items
      }

      return options.map(({ disabled, group, items, text, value }) => {
        if (group) {
          return (
            <optgroup key={`option${group}`} label={group}>
              {renderOptions(items)}
            </optgroup>
          )
        }

        return <option children={text} disabled={disabled} key={`option${value}`} value={value} />
      })
    }

    return (
      <FieldHOC
        component={StyledSelect}
        defaultValue={defaultValue}
        disabled={disabled}
        ref={ref}
        showError={showError}
        {...data}
        {...props}
      >
        {range && range.length > 0 && renderRange()}
        {options && renderOptions()}
      </FieldHOC>
    )
  }
)

const StyledSelect = styled.select`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    color: ${({ theme }) => theme.COLOUR.dark};
    outline: 0;
  }

  ${({ errors }) =>
    errors &&
    css`
      background: rgb(251, 236, 242);
      border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144);
      border-image: initial;
      border-style: solid;
      border-width: 1px 1px 1px 10px;
    `}
`

SelectField.propTypes = {
  data: object,
  defaultValue: string,
  disabled: bool,
  options: array,
  placeholder: string,
  range: array,
  showError: bool
}

SelectField.defaultProps = {
  defaultValue: '',
  disabled: false,
  range: [],
  showError: false
}
