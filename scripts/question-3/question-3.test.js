import { expect } from "@jest/globals";
import { getDiscountPercentage, formatDecimalSpaces } from "./question-3";

describe("test functions question 3", () => {
    test("it should get percentage", () => {
        expect(getDiscountPercentage(100, 75)).toBe(25);
    })
    test("it should Converts a value to 2 decimal spaces", () => {
        expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
    })
});
