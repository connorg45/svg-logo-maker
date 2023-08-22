const { Square, Triangle, Circle } = require("../lib/shapes");

// Describe block for testing the "Square" class
describe("Square", () => {
  test("should render svg for a blue polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="#1E90FF" />'; 
    const square = new Square();
    square.setColor("#1E90FF");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="#FF5733" />'; 
    const square = new Square();
    square.setColor("#FF5733");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Describe block for testing the "Triangle" class
describe("Triangle", () => {
  test("should render svg for a pink polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="#FF69B4" />'; 
    const triangle = new Triangle();
    triangle.setColor("#FF69B4");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="#800080" />';
    const triangle = new Triangle();
    triangle.setColor("#800080");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

// Describe block for testing the "Circle" class
describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg =
      '<circle cx="150" cy="100" r="80" fill="#00FF00" />'; 
    const circle = new Circle();
    circle.setColor("#00FF00");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<circle cx="150" cy="100" r="80" fill="#00FFFF" />'; 
    const circle = new Circle();
    circle.setColor("#00FFFF");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});