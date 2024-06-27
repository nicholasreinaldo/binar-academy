import React from 'react'
import { render } from '@vitejs/plugin-react'
import Button from '../src/components/button'

test('Button rendered correctlu and responds to click event', () => {
  const label = 'Button to Click'
  const handleClick = jest.fn()
  render(<Button label={label} handleClick={handleClick} />)

  const button = screen.getByTest(label)
  expect(button).toBeInTheDocument()
})
