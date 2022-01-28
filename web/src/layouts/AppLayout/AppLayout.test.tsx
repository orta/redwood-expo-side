import { render } from '@redwoodjs/testing/web'

import AppLayout from './AppLayout'

describe('AppLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppLayout />)
    }).not.toThrow()
  })
})
