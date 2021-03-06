/**
 * Select
 */

// React
import { forwardRef } from 'react'
import { array, arrayOf, bool, func, number, object, oneOfType, string } from 'prop-types'

// UI
import { Label } from '../../../'

// Style
import styled from 'styled-components'

export const Select = forwardRef(
  ({ change, data, disabled, label, id, options, placeholder, range, required, value }, ref) => {
    const renderRange = () => {
      const options = [
        <option disabled value='' key='initial0'>
          {placeholder}
        </option>
      ]

      for (let i = range[1]; i <= range[0]; i++) {
        options.push(
          <option disabled={disabled} key={`range${i}`} value={i}>
            {i}
          </option>
        )
      }

      return options
    }

    const renderOptions = () => {
      return options.map(({ disabled, text, value }, index) => (
        <option children={text} disabled={disabled} key={`option${index}`} value={value} />
      ))
    }

    const SearchItem = () => (
      <StyledSelect
        className='Form-control'
        id={id}
        name={id}
        onChange={change}
        required={required}
        ref={ref}
        value={value}
        {...data}
      >
        {range && range.length > 0 && renderRange()}
        {options && renderOptions()}
      </StyledSelect>
    )

    return (
      <>
        {label ? (
          <Label text={label}>
            {SearchItem()}
            <div className='Form-feedback' />
          </Label>
        ) : (
          SearchItem()
        )}
      </>
    )
  }
)

const StyledSelect = styled.select`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  color: #9da7af;
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
    color: #9da7af;
    outline: 0;
  }
`

Select.propTypes = {
  change: func.isRequired,
  data: object,
  id: string,
  label: string,
  options: array,
  placeholder: string,
  range: array,
  required: bool,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

Select.defaultProps = {
  range: [],
  required: true
}
