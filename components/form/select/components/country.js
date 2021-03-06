/**
 * Country
 */

// React
import { func, object, string } from 'prop-types'

// UI
import { SelectField } from '../'

// Data
import { COUNTRY } from '../../../constants'

export const SelectCountryField = ({ errors, name, register, ...props }) => {
  return (
    <SelectField errors={errors} name={name} options={COUNTRY} register={register} {...props} />
  )
}

SelectCountryField.propTypes = {
  errors: object.isRequired,
  name: string.isRequired,
  register: func.isRequired
}
