const SVG = require("../lib/svg");
const { Square } = require("../lib/shapes");

describe("SVG Class", () => {
  // Test suite for rendering SVG elements
  describe("Rendering", () => {
    test("should render a 300 x 200 svg element", () => {
      const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
      const svg = new SVG();
      expect(svg.render()).toEqual(expectedSvg);
    });
  });

  // Test suite for the setText method
  describe("setText Method", () => {
    test("should append text element", () => {
      const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="118" font-size="60" text-anchor="middle" fill="green">A</text></svg>';
      const svg = new SVG();
      svg.setText("A", "green");
      expect(svg.render()).toEqual(expectedSvg);
    });

    test("should set text message and color", () => {
      const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="118" font-size="60" text-anchor="middle" fill="#0000FF">SVG</text></svg>';
      const svg = new SVG();
      svg.setText("SVG", "#0000FF");
      expect(svg.render()).toEqual(expectedSvg);
    });

    test("should throw if text exceeds 3 characters", () => {
      const expectedError = new Error("Text must not exceed 3 characters.");
      const svg = new SVG();
      expect(() => svg.setText("HELLO", "#0000FF")).toThrow(expectedError);
    });
  });

  // Test suite for the setShape method
  describe("setShape Method", () => {
    test("should include a shape", () => {
      const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="white" /><text x="150" y="118" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
      const svg = new SVG();
      svg.setText("SVG", "#333");
      const square = new Square();
      square.setColor("white");
      svg.setShape(square);
      expect(svg.render()).toEqual(expectedSvg);
    });
  });
});