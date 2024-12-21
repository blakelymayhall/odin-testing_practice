import { capitalize, reverseString, calculator } from "./problems";

test("Capitalizes String", () => {
    expect(capitalize("test")).toBe("Test");
});

test("Capitalizes String", () => {
    expect(capitalize("Test")).toBe("Test");
});

test("Capitalizes String", () => {
    expect(capitalize("test")).toBe("Test");
});

test("Reverse String", () => {
    expect(reverseString("Test")).toBe("tseT");
});

const calc = calculator(1, 2);
test("Calculator Add", () => {
    expect(calc.sum()).toBe(3);
});

test("Calculator Multiply", () => {
    expect(calc.multiply()).toBe(2);
});
