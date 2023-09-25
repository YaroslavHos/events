import '@testing-library/jest-dom';
import * as React from 'react';
import {render, screen} from "@testing-library/react";
import EventsTable from "./index";


it('should render component', () => {
    render(<EventsTable list={[]}/>);
    const test = screen.getByTestId('table-testId');
    expect(test).toBeInTheDocument()
})