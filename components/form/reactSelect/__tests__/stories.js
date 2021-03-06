/**
 * React Select
 */

// React
import React, { useEffect, useState } from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Button, FormForm, FormLabel, ReactSelectField, usePrevious } from 'components'
import Readme from '../README.md'

// Data
import { Customers, Options, UsersAvison, UsersHousing } from '../__mocks__/reactSelect'

export default {
  title: 'Form/ReactSelect',
  component: ReactSelectField,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = (props = {}) => {
  const { defaultProps } = ReactSelectField

  const knobs = Object.keys(defaultProps)
    .filter(key => typeof defaultProps[key] === 'string' || typeof defaultProps[key] === 'boolean')
    .reduce((acc, key) => {
      const value = props[key] !== undefined ? props[key] : defaultProps[key]
      const knob = typeof value === 'boolean' ? boolean(key, value) : text(key, value)
      acc[key] = knob
      return acc
    }, {})

  return knobs
}

const BaseComponent = (props = {}) => {
  const { control, errors, handleSubmit } = useForm()
  const knobs = useKnobs()
  const onSubmit = data => {}

  const defaultProps = {
    control,
    errors: errors,
    isClearable: true,
    name: 'reactSelect',
    options: Options,
    required: 'This is required',
    ...knobs,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='React Select'>
        <ReactSelectField {...defaultProps} />
      </FormLabel>

      {errors.reactSelect && <p>{errors.reactSelect.message}</p>}

      <Button content='Submit' secondary type='submit' />
    </FormForm>
  )
}

export const Single = () => {
  return <BaseComponent />
}

export const Multi = () => {
  const knobs = useKnobs({ isMulti: true })
  return <BaseComponent {...knobs} />
}

export const withDefaultValue = () => {
  return <BaseComponent defaultValue={Options[0]} />
}

export const async = () => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(Options.filter(o => o.value.includes(inputValue)))
    }, 2000)
  }

  return <BaseComponent async defaultOptions name='asyncSelect' loadOptions={loadOptions} />
}

export const chained = () => {
  const { control, errors, handleSubmit, setValue, watch } = useForm()

  // GraphQL happens before this and sets the defaults
  const watchCustomer = watch('customer', Customers[0])

  const [data, setData] = useState()

  const [users, setUsers] = useState(UsersAvison)
  const [user] = useState(UsersAvison[0])

  const prevCustomer = usePrevious(watchCustomer)

  const CustomerOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('Firing Customers')
        resolve(Customers)
      }, 1000)
    })

  const UserOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('Firing Users')
        resolve(users)
      }, 2000)
    })

  useEffect(() => {
    if (watchCustomer !== prevCustomer) {
      // Debug
      // console.log('Changed Customer', prevCustomer, watchCustomer)

      if (watchCustomer === null) {
        setUsers(null)
      } else if (watchCustomer.value === '2') {
        setUsers(UsersAvison)
      } else {
        setUsers(UsersHousing)
      }

      setValue('user', null)
    }
  }, [watchCustomer])

  const knobs = useKnobs()

  const onSubmit = data => {
    console.log(data)
    setData(data)
  }

  const defaultProps = {
    async: true,
    cacheOptions: false,
    control,
    defaultOptions: true,
    errors: errors,
    isClearable: true,
    required: 'This is required',
    ...knobs
  }

  return (
    <>
      <p>
        Initially load the async react select with a promise. we use the defaultValue prop to load
        any options already submitted. This should be part of the original GraphQL query. It must be
        in the form {'{'} value: '2', label: 'Avison Young' {'}'}
      </p>

      <p>
        Customers will never lose their options, but can change or remove the default value, they
        will return the account ID to get the Users/
        <br />
        Default Customer, Click X on customer it should unload default and options
        <br />
        It does not matter if the user changes their option
      </p>

      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Customers'>
          <ReactSelectField
            defaultValue={Customers[0]}
            loadOptions={CustomerOptions}
            name='customer'
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label='Users'>
          <ReactSelectField
            defaultValue={user}
            loadOptions={UserOptions}
            name='user'
            {...defaultProps}
          />
        </FormLabel>

        {errors.reactSelect && <p>{errors.reactSelect.message}</p>}

        {data && (
          <>
            <p>
              Submitted and valid
              <br />
              Customer: {data.customer.value} - {data.customer.label}
              <br />
              User: {data.user.value} - {data.user.label}
            </p>
          </>
        )}

        <Button content='Submit' secondary type='submit' />
      </FormForm>
    </>
  )
}

export const chainedNoDefault = () => {
  const { control, errors, handleSubmit, setValue, watch } = useForm()

  // GraphQL happens before this and sets the defaults
  const watchCustomer = watch('customer', null)
  const watchUser = watch('user', null)

  const [data, setData] = useState()

  const [users, setUsers] = useState(UsersAvison)
  const [user] = useState(null)

  const prevCustomer = usePrevious(watchCustomer)
  const prevUser = usePrevious(watchUser)

  const CustomerOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('Firing Customers')
        resolve(Customers)
      }, 1000)
    })

  const UserOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('Firing Users')
        resolve(users)
      }, 2000)
    })

  useEffect(() => {
    if (watchCustomer !== prevCustomer) {
      console.log('Changed Customer', prevCustomer, watchCustomer)
      console.log('Changed User', prevUser, watchUser)

      if (watchCustomer === null) {
        console.log('reset')
        setUsers(null)
      } else if (watchCustomer.value === '2') {
        console.log('Avison')
        setUsers(UsersAvison)
      } else {
        console.log('Housing')
        setUsers(UsersHousing)
      }

      setValue('user', null)
    }
  }, [watchCustomer])

  const knobs = useKnobs()

  const onSubmit = data => {
    console.log(data)
    setData(data)
  }

  const defaultProps = {
    async: true,
    cacheOptions: false,
    control,
    defaultOptions: true,
    errors: errors,
    isClearable: true,
    required: 'This is required',
    ...knobs
  }

  return (
    <>
      <p>
        Initially load the async react select with a promise. we use the defaultValue prop to load
        any options already submitted. This should be part of the original GraphQL query. It must be
        in the form {'{'} value: '2', label: 'Avison Young' {'}'}
      </p>

      <p>
        Customers will never lose their options, but can change or remove the default value, they
        will return the account ID to get the Users/
        <br />
        Default Customer, Click X on customer it should unload default and options
        <br />
        It does not matter if the user changes their option
      </p>

      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Customers'>
          <ReactSelectField
            defaultValue={null}
            loadOptions={CustomerOptions}
            name='customer'
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label='Users'>
          <ReactSelectField
            defaultValue={user}
            loadOptions={UserOptions}
            name='user'
            {...defaultProps}
          />
        </FormLabel>

        {errors.reactSelect && <p>{errors.reactSelect.message}</p>}

        {data && (
          <>
            <p>
              Submitted and valid
              <br />
              Customer: {data.customer.value} - {data.customer.label}
              <br />
              User: {data.user.value} - {data.user.label}
            </p>
          </>
        )}

        <Button content='Submit' secondary type='submit' />
      </FormForm>
    </>
  )
}
