import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
    const {getByText} = render(<Dashboard />)

})