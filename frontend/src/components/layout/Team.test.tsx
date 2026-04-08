import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Team from './Team'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Team Component', () => {
  it('renders correctly with all members', () => {
    render(<Team />)

    expect(screen.getByText('team.title')).toBeDefined()

    expect(screen.getByText('Alex Rivera')).toBeDefined()
    expect(screen.getByText('team.roles.lead')).toBeDefined()

    expect(screen.getByText('Sofia Chen')).toBeDefined()
    expect(screen.getByText('team.roles.design')).toBeDefined()

    expect(screen.getByText('Marcus Vogt')).toBeDefined()
    expect(screen.getByText('team.roles.dev')).toBeDefined()

    expect(screen.getByText('Elena Torres')).toBeDefined()
    expect(screen.getByText('team.roles.strategy')).toBeDefined()
  })
})
