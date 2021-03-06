/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'
import { array, bool, func, string, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select, useForm } from '../../../'
import { ImageWrapper } from '../../'

export const ImageLocation = ({
  initial,
  initialCoordinates,
  label,
  coordinatesChange,
  itemChange,
  options,
  show
}) => {
  const INITIAL_STATE = {
    option: initial
  }

  const [item, setItem] = useState(null)
  const [coordinates, setCoordinates] = useState(initialCoordinates)

  const { change, form } = useForm(INITIAL_STATE)
  const { option } = form

  useEffect(() => {
    const selected = options.find(o => o.value === parseInt(option)) || null
    setItem(selected)
    itemChange && itemChange(selected)
    setCoordinates(coordinates)
  }, [option])

  useEffect(() => {
    coordinatesChange && item && coordinatesChange({ coordinates, item })
  }, [coordinates])

  return (
    <StyledImageLocation show={show}>
      <Select
        change={change}
        id='option'
        label={label}
        options={[{ text: `Select ${label}`, value: '' }, ...options]}
        value={option}
      />

      {item && (
        <ImageWrapper coordinates={coordinates} item={item} setCoordinates={setCoordinates} />
      )}
    </StyledImageLocation>
  )
}

const StyledImageLocation = styled.div`
  overflow-x: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

ImageLocation.propTypes = {
  className: string,
  coordinatesChange: func,
  itemChange: func,
  options: array.isRequired,
  style: object,
  show: bool
}

ImageLocation.defaultProps = {
  show: true
}
