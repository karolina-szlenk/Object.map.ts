import { objectMap as mapper } from './main'
import { anyObject, tupleOfKeyAndValue , callbackOfMap} from './main'

export {}

declare global {
  interface Object {
    map(callback: callbackOfMap): anyObject
  }
}

Object.prototype.map = mapper

describe('function map', () => {
  it('should check whether callback works correctly', () => {
    interface Person {
      name: string,
      age: number,
      isStudent: boolean
    }

    type changedValueName = string
    type changedKeyisStudent = string

    const person: Person = {
      name: 'Cindy',
      age: 22,
      isStudent: true
    }

    const newName: changedValueName = "Emily"
    const newKey: changedKeyisStudent = "isSinger"

    const result1 = person.map(([key, val]: tupleOfKeyAndValue) => {
      if ( val === person.name) {
        return { [key]: newName}
      }
      return {};
    })

    const result2 = person.map(([key, val]: tupleOfKeyAndValue) => {
      if ( key === "isStudent") {
        return { [newKey]: val}
      }
      return {};
    })

    const { name } = result1;
    expect(name).toBe(newName)
    expect(Object.keys(result2).filter(el => el === newKey)).toEqual([newKey])

  });

  it('should return empty object if callback is wrong', () => {
    interface Person {
      name: string,
      age: number,
      isStudent: boolean
    }

    type changedValueName = string

    type searchedName = string

    const person: Person = {
      name: 'Cindy',
      age: 22,
      isStudent: true
    }

    const newName: changedValueName = "Emily"

    const searchedName: searchedName = "Poly"

    const result = person.map(([key, val]: tupleOfKeyAndValue) => {
      if ( val === searchedName) {
        return { [key]: newName}
      }
      return {};
    })

    const expectedObject = {}
    expect(result).toEqual(expectedObject)
  })
})