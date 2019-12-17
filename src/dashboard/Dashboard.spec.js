import React from "react";
import { render } from "@testing-library/react";
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