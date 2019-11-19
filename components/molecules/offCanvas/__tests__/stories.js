import { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'

// UI
import { OffCanvas } from '../'
import Readme from '../README.md'

import { Button, Input, Form, Progress, ProgressBar } from '../../../'

export default {
  title: 'Molecules/OffCanvas',
  components: OffCanvas,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const [isChecked, toggleCheck] = useState(true)
  const textKnob = text('headerText', 'Homyze')

  return (
    <>
      <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
      <input
        onChange={e => toggleCheck(!isChecked)}
        id='offCanvas'
        type='checkbox'
        checked={isChecked}
      />
      <OffCanvas headerText={textKnob} show={isChecked} toggleShow={toggleCheck}>
        Components go here
      </OffCanvas>
    </>
  )
}

const ContainerDiv = styled.div`
  padding: 10px;
`

export const withMailForm = () => {
  const [isChecked, toggleCheck] = useState(true)
  const textKnob = text('headerText', 'Homyze')

  return (
    <>
      <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
      <input
        onChange={e => toggleCheck(!isChecked)}
        id='offCanvas'
        type='checkbox'
        checked={isChecked}
      />
      <OffCanvas headerText={textKnob} show={isChecked} toggleShow={toggleCheck}>
        <ContainerDiv>
          <Form submit={() => {}}>
            <Input
              change={() => {}}
              label='Email'
              id='email'
              placeholder='Enter email address'
              type='email'
            />
            <Button secondary type='submit'>
              Send reset link
            </Button>
          </Form>
          <br />
          <Progress size='md'>
            <ProgressBar striped animated now={90}>
              90%
            </ProgressBar>
          </Progress>
        </ContainerDiv>
      </OffCanvas>
    </>
  )
}

export const withDynamicContent = () => {
  const [isChecked, toggleCheck] = useState(true)
  const [previewIndex, changePreview] = useState(1)

  const previews = {
    1: {
      headerText: 'Homyze First',
      component: function () {
        return (
          <>
            <Form submit={() => {}}>
              <Input
                change={() => {}}
                label='Email'
                id='email'
                placeholder='Enter email address'
                type='email'
              />
              <Button secondary type='submit'>
                Send reset link
              </Button>
            </Form>
            <br />
            <Progress size='md'>
              <ProgressBar striped animated now={90}>
                90%
              </ProgressBar>
            </Progress>
          </>
        )
      }
    },
    2: {
      headerText: 'Homyze Second',
      component: function () {
        return <div>2</div>
      }
    },
    3: {
      headerText: 'Homyze Third',
      component: function () {
        return <div>3</div>
      }
    }
  }

  return (
    <>
      <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
      <input
        onChange={e => toggleCheck(!isChecked)}
        id='offCanvas'
        type='checkbox'
        checked={isChecked}
      />
      <br />
      <Button onClick={e => changePreview(1)}>Preview one</Button>
      <br />
      <br />
      <Button onClick={e => changePreview(2)}>Preview two</Button>
      <br />
      <br />
      <Button onClick={e => changePreview(3)}>Preview three</Button>
      <OffCanvas
        headerText={previews[previewIndex].headerText}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        <ContainerDiv>{previews[previewIndex].component()}</ContainerDiv>
      </OffCanvas>
    </>
  )
}