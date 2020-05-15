
const WithTemplate = (template: string, hookId: string) => {
    return function<T extends { new(...args: any[]): { name: string } }> (originalCtor: T) {
        return class extends originalCtor {

            constructor(..._: any[]) {
                super();

                const div = document.getElementById(hookId)!
                div.textContent = template + this.name
            }
        }
    }
}

const Autobind = (_:any, _2:string, descriptor: PropertyDescriptor) => {

    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(): any {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

@WithTemplate('Hello, ', 'app')
class Person {

    constructor(public name: string, public age: number) {
        console.log('Person instantiated')
    }

}

const person1 = new Person('Aek', 29)
const person2 = new Person('Mook', 28)
const persons = [person1, person2]

class Predicate<T extends object> {

    constructor(private readonly array: T[]) {
    }

    select<TKey extends keyof T>(key: TKey): Array<T[TKey]> {

        const newArray = this.array.map((value) => value[key])

        return newArray
    }

}


const predicate = new Predicate(persons)
console.log(predicate.select('name'))