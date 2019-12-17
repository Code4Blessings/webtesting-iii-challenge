import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { testNameToKey } from "jest-snapshot/build/utils";

// Test away

test('Gate defaults to unlocked', () => {
    const { getByText} = render(<Dashboard />)
    getByText(/unlocked/i);
})

test('Gate defaults to open', () => {
    const {getByText} = render(<Dashboard />)
    getByText(/open/i);
})

test('Gate cannot be closed or opened if it is locked', () => {
    const {getByText, getByTestId} = render(<Dashboard />)
    const lockButton = getByTestId('lockButton');
    fireEvent.click(lockButton)
    getByText('Lock Gate')
})

test('Gate cannot be closed or opened if it is locked', () => {
    const {getByText, getByTestId} = render(<Dashboard />)
    const lockButton = getByTestId('lockButton');
    fireEvent.click(lockButton)
    getByText('Unlock Gate')
})

test('Gate cannot be closed or opened if it is locked', () => {
    const {getByText, getByTestId} = render(<Dashboard />)
    const closeButton = getByTestId('closeButton');
    fireEvent.click(closeButton)
    getByText('Open Gate')
})

test('Gate cannot be closed or opened if it is locked', () => {
    const {getByText, getByTestId} = render(<Dashboard />)
    const closeButton = getByTestId('closeButton');
    fireEvent.click(closeButton)
    getByText('Close Gate')
})


