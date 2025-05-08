## What are some differences between interfaces and types in TypeScript?

#### Types: 

    1) A collection of data types.
    2) Uses the type keyword.
    3) Does not inherently support the use of an object.
    4) Can create intersection types by combining multiple types.
    5) Can be used for types like primitives, unions, and tuples.	 

#### Interfaces:

    1) A syntactical contract.
    2) Uses the interface keyword.
    3) Supports the use of an object.
    4) Cannot create intersection interfaces.
    5) Cannot be used with other types of declaration.




## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

    enums is a special data type that allows to define a set of named constants. There are two main types of enums in TypeScript: numeric enums and string enums.

Numeric enum

```bash
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
let move: Direction = Direction.Up;


```

String Enums

```bash
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let move: Direction = Direction.Up;

```

