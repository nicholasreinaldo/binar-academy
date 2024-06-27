import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

jest.mock('react-router-dom', () => {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
})
