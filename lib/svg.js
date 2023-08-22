// SVG class to create and manipulate SVG elements
class SVG {
  constructor() {
    this.textElement = ""; // Store the text element of the SVG
    this.shapeElement = ""; // Store the shape element of the SVG
  }

  // Render method to generate the complete SVG markup
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  // Set the text element of the SVG with the provided message and color
  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textElement = `<text x="150" y="118" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  // Set the shape element of the SVG using the provided shape object
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

// Exports SVG class
module.exports = SVG;
