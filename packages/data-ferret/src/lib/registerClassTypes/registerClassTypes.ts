import { UnknownClass } from '../shared/model'
import { registeredClasses } from '../shared/consts'

/**
 * Registers one or more classes which will set up the rest of the data-ferret'd API to treat instances
 * said class or classes as having their own unique data type that corresponds to their class.
 */
export const registerClassTypes = (...classes: UnknownClass[]): void => {
  const list = ([] as UnknownClass[]).concat(classes)
  while (registeredClasses.length) registeredClasses.pop()
  list.forEach(entry => registeredClasses.push(entry))
}
