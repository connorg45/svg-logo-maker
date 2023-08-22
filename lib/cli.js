const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');

class CLI {
  // Runs the command-line interface
  run() {
    return inquirer
      .prompt([
        {
          name: 'text',
          type: 'input',
          message: 'Enter the logo text. (3 character maximum.)',
          validate: (text) => {
            if (text.length <= 3) {
              return true; // Validation passed
            } else {
              return 'You exceeded the character limit.'; // Validation failed
            }
          },
        },
        {
          name: 'textColor',
          type: 'input',
          message: 'Enter a text color',
        },
        {
          name: 'shapeType',
          type: 'list',
          message: 'Select a shape for your logo',
          choices: ['circle', 'square', 'triangle'],
        },
        {
          name: 'shapeColor',
          type: 'input',
          message: 'Enter a color for the shape.',
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        const shape = createShape(shapeType);
        shape.setColor(shapeColor); // Sets the shape color          

        const svg = createSVG(text, textColor, shape);
        return saveSVGToFile(svg);
      })
      .then(() => {
        console.log('Generated logo.svg! :D');
      })
      .catch((error) => {
        console.log(error);
        console.log('Oh no an error! D;');
      });

    // Creates a shape instance based on the selected type
    function createShape(shapeType) {
      switch (shapeType) {
        case 'circle':
          return new Circle();
        case 'square':
          return new Square();
        default:
          return new Triangle();
      }
    }

    // Creates a SVG instance with text and shape
    function createSVG(text, textColor, shape) {
      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shape);
      return svg;
    }

    async function saveSVGToFile(svg) {
      const outputPath = './generated_svgs/logo.svg';
      await writeFile(outputPath, svg.render());
    }
  }
}

module.exports = CLI;
