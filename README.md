## Object map
[![Gladiatorzy](https://i.postimg.cc/28mX4TNt/gladiator.png)](https://gladiators-of-javascript.com/)

### Description
The exercise is to create and test a map method for an object e.g. like this:
```sh
const obj = {test:'value', test2:'value2'}
```
This method accepts a callback that can change the key or value of the object.
```sh
const callback = ([key, value], idx, self) => {
    return { [key]: value }
}
```
This method should work as follows:
```sh
const result = obj.map(([key, value], idx, self)=>{
    if(value === 'value'){
        return { [key]: value }
    }
    return {}
}) 
// { test:'value' } - output
```
	
### Tech
* [TypeScript](https://github.com/microsoft/TypeScript)
* [npm](https://github.com/npm/cli)
* [Jest](https://github.com/facebook/jest)

### Author
* [karolina-szlenk](https://github.com/karolina-szlenk)  