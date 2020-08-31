/**
 * Image Location
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { ImageLocation } from '../../../'
import Readme from '../README.md'

// Data
import { Property } from '../__mocks__/properties'

// Note: Images are imported here to make sure they are included in the bundle,
// but they are loaded using /static/media/ urls within property data
import '../__resources__/images/ground-floor.png'
import '../__resources__/images/first-floor.png'
import '../__resources__/images/second-floor.png'
import '../__resources__/images/third-floor.png'
import '../__resources__/images/fourth-floor.png'

export default {
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <ImageLocation
    locationChange={action('change')}
    coordinatesChange={coordinates => {
      console.info(coordinates)
    }}
    item={Property}
  />
)

export const withCoordinatesStored = () => {
  const initialCoordinates = {
    x: 449,
    y: 454
  }
  return (
    <ImageLocation
      locationChange={action('change')}
      initialCoordinates={initialCoordinates}
      coordinatesChange={coordinates => {
        console.info(coordinates)
      }}
      item={Property}
    />
  )
}
