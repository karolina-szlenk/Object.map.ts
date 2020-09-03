"use strict";
class GenericObject {
    objToArray(obj) {
        return Object.entries(obj);
    }
    fromEntries(iterable, cb) {
        return [...iterable].reduce((obj, [key, val]) => {
            return Object.assign(obj, cb([key, val]));
        }, {});
    }
    map(cb) {
        return this.fromEntries(this.objToArray(this.object), cb);
    }
}
const person = new GenericObject();
person.object = {
    id: 3,
    name: 'Kate',
};
const result = person.map(([key, val]) => (val === 3 ? { [key]: val } : {}));
console.log(result);
//# sourceMappingURL=main.js.map