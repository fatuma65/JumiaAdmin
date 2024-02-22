import {render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Count from '../src/Count'

describe('count ', () => {
    it('should increase count by 1', () => {
        render(<Count />)
        const count = screen.getAllByTestId('count')
        const button = screen.getByText('increase')
        fireEvent.click(button)
        expect(count.textContent).toBe('1')
    })
})