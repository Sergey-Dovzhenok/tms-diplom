import React from "react";
import { render } from "@testing-library/react";

import InfoText from "../InfoText";

const infoID = "info";

describe("testing InfoText", () => {
    test("should render with out crashing", () => {
        const { getByTestId } = render(<InfoText info={"hello"}></InfoText>);
        const element = getByTestId(infoID);
        expect(element.textContent).toBe("hello");
    });
});
