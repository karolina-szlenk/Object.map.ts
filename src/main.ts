export interface anyObject {
  [key: string]: any
}

export type tupleOfKeyAndValue = [string, any]

type mapReduceCallback = (
  acc: anyObject,
  current: tupleOfKeyAndValue,
  index: number,
  self: Array<tupleOfKeyAndValue>
) => anyObject

export type callbackOfMap = (entry: tupleOfKeyAndValue, index: number, self: anyObject) => anyObject


export function objectMap(callback: callbackOfMap): anyObject {

  const entries: Array<tupleOfKeyAndValue> = (<anyObject>Object).entries(this);

  const reduceCallback: mapReduceCallback = (acc, entry, idx, self) => {
    const result: anyObject = {
    ...acc,
    ...callback(entry, idx, self)
    }
    return result;
  }
  const initial: anyObject = {}
  return entries.reduce(reduceCallback, initial)
}
