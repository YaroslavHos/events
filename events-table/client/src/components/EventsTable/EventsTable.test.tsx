import {render, screen} from "@testing-library/react";
import EventsTable from "./index";

test('should render component', () => {
    render(<EventsTable />);
    const test = screen.getByTestId('form-testId');
    expect(test).toBeInTheDocument()
})