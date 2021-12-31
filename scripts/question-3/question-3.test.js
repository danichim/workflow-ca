import { expect } from "@jest/globals";
import { getDiscountPercentage } from "./question-3";

describe("get discount percentage", () => {
    test("it should get percentage", () => {
        expect(getDiscountPercentage(100, 75)).toBe(25);
   })   
});
