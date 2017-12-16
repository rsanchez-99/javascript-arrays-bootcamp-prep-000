var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementsToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
