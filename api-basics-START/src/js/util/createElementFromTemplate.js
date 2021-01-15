/* @method createElementFrom template
 *@param array of template literals as valid markup
 */

function createElementFromTemplate(template = []) {
  let elements;
  if (template.length === 0) {
    throw new Error('You must add array of template literals as valid markup');
  }

  elements = template.map((templateLiteral) => {
    const element = document
      .createRange()
      .createContextualFragment(templateLiteral).children[0];
    return element;
  });

  return elements;
}

export default createElementFromTemplate;
