# Summary
TypeScript is a statically typed language. A statically typed language is a language where the type of a variable is given at the time the program is compiled. 

JavaScript is a dynamically typed language. In a dynamically typed language, the type of the variable is determined at runtime and is based on the value inside the variable, not the variable declaration.

## Interfaces
Interfaces are not used in JavaScript, but are important in TypeScript. Like classes, interfaces define properties and methods that a type will have. The difference is that interfaces do NOT include initialization of properties or implementations of methods.

>**Note**  
Though the use of interfaces in Angular is not within the scope of this book, interfaces are used rather frequently in Angular code and are important in object-oriented programming languages, such as Java.

We may create an interface for a data type that contains all of the information we need about an astronaut and then use that information in a function.
```ts
interface Astronaut {
   name: string;
}

function astronautName (astronaut: Astronaut) {
   name: string;
   return astronaut.name;
}

let bob = {name: "Bob"};
console.log(astronautName(bob));
```

Interfaces define the contract that other classes or objects must comply with if implementing that interface. Multiple classes can implement one interface, and that flexibility allows different classes to share one type. This can be helpful when a function parameter needs to make use of certain behaviors.  
An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.  
Interfaces work as a validation check for checking mandatory properties and their types on objects (created by classes) at compile time.  
In addition to driving consistency across TypeScript classes, interfaces can also be used to ensure proper values are being passed into properties, constructors, or functions.
```ts
interface interfaceName {
   someProperty: number;
}

class className implements interfaceName {
   constructor(x: number) {
      this.someProperty = x;
   }
}
```

>**Example**  
```ts
interface Panthera {
   roar: string;
}

class Tiger implements Panthera {
   roar: string;

   constructor() {
      this.roar = 'rooooaaaarrrr';
   }
}

class Lion implements Panthera {
   roar: string;

   constructor() {
      this.roar = 'ROOOOAAAAARRRRRR';
   }
}

function pantheraSounds(panthera: Panthera) {
   console.log(`Panthera says ${panthera.roar}`);
}

let tiger = new Tiger();
let lion = new Lion();

pantheraSounds(tiger);
pantheraSounds(lion);
```
In this example, the **Panthera** interface defines the **roar** property. **Tiger** and **Lion** implement the **Panthera** interface, which means **Tiger** and **Lion** must have a roar property.

The function **pantheraSounds** has one parameter of type **Panthera**. The variables **tiger** and **lion** can be passed into **pantheraSounds** because they are instances of classes that implement the **Panthera** interface.

>**Another Example**  
```ts
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

let customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

let employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);
```

## Optional Parameters
`null` and `undefined` are primitive data types in TypeScript, however, they are treated differently by TypeScript. If you are planning on using null to define a property of an interface that is not known yet, use the TypeScript optional parameter, `?`.  
If we wanted to declare the same object as an interface in TypeScript, we would have to use the optional parameter for the `weight` property.
```ts
interface giraffeTwo = {
     species: string;
     name: string;
     weight?: number;
     age: number;
     diet: string;
};
```

## export
```ts
export class className {
   // properties and methods
}
```

## import
```ts
import { className } from 'relativefilepath';

let newClass = new className;
```

## Installation
```shell
npm install -g typescript
```

## Test
```shell
tsc -v
```

# Compile typescript
`tsc <fileName>.ts`