interface IObject {
  id: number
  name: string
}

type callback = (...args: any[]) => any

class GenericObject<T extends IObject> {
  public object: T

  private objToArray(obj: object) {
    return Object.entries(obj)
  }

  private fromEntries<V>(iterable: Iterable<[string, V]>, cb: callback) {
    return [...iterable].reduce((obj, [key, val]) => {
      return Object.assign(obj, cb([key, val]))
    }, {} as { [k: string]: V })
  }

  public map(cb: callback) {
    return this.fromEntries(this.objToArray(this.object), cb)
  }
}

const person = new GenericObject<IObject>()
person.object = {
  id: 3,
  name: 'Kate',
}
const result = person.map(([key, val]) => (val === 3 ? { [key]: val } : {}))
console.log(result)
