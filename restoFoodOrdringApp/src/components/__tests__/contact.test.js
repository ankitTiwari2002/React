import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; // Importing extend-expect for custom jest matchers

test("renders a submit button inside Contact component", () => {
    render(<Contact />);
    
    // Find the button by text
    const submitButton = screen.getByText("Submit");

    // Assertion
    expect(submitButton).toBeInTheDocument(); // Check if button is in the document
    expect(submitButton.tagName).toBe("BUTTON"); // Check if it's a button element
    expect(submitButton).toHaveAttribute("type", "submit"); // Check if it has type attribute set to "submit" (if applicable)
    // Add more assertions as needed for behavior or styling
});
