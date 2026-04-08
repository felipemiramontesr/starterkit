import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Process from './Process'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Process Component', () => {
  it('renders correctly with all steps', () => {
    render(<Process />)

    expect(screen.getByText('process.title')).toBeDefined()
    expect(screen.getByText('process.steps.one.title')).toBeDefined()
    expect(screen.getByText('process.steps.two.title')).toBeDefined()
    expect(screen.getByText('process.steps.three.title')).toBeDefined()
    expect(screen.getByText('process.steps.four.title')).toBeDefined()
  })

  it('contains the numbered step indicators', () => {
    render(<Process />)

    expect(screen.getByText('01')).toBeDefined()
    expect(screen.getByText('02')).toBeDefined()
    expect(screen.getByText('03')).toBeDefined()
    expect(screen.getByText('04')).toBeDefined()
  })
})
