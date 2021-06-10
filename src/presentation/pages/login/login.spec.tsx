import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'
import '@testing-library/jest-dom/extend-expect'

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId, container } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('')
    expect(container.firstChild).toHaveStyle('border: 1px solid $white;')
    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('')
    expect(container.firstChild).toHaveStyle('border: 1px solid $white;')
  })
})
