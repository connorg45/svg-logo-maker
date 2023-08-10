const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');

class CLI {
  run() {
    return inquirer.prompt([
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
    ]);
  }
}

module.exports = CLI;
    

