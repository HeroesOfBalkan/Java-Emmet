# Abbreviations list
Here is everything about each abbreviation, usage, how to use (syntax or format) and examples. Still confused? Watch our tutorials (not available ATM)

## Common stuff

`()` -> Parameters

    > Used to include parameters or arguments of JEmmet functions.

    > Example: `#@~doesContain(subText, parentText)=${...}`



`[]` -> Array

    > Used to include multiple values in one run of JEmmet function.

    > Example: `#%--(item, ['Apple', 'Bread', 'Batteries', 'Ketchup', 'Fish']){|plog(item)}`


`{}` -> Expression

    > Used to write some simple expressions like mathmetatics, comparisons, logic and et cetara.

    > Example: `#!?{illegal=${myStr + myNum}}:!(){|plog("You cannot sum grandmas and frogs!")}`



`` ` ` `` -> Custom code (Actual injected Java code)

    > Used to write Java code inside JEmemt format.

    > Optimal for writing Java code for use of methods for an example.



`,` -> Next parameter

    > Used to separate one parameter value from another.
    
    > Example: `%-(1, 5, 1){|plog(i)}` is `for(int i = 1, i < 5, i++) {System.out.println(i);}`



`>>` -> Next sequence
    > Used to go with next JEmmet format inside same line.



`...` -> Reserved pointer position (*"for later"*)
    > Used to "leave for later", putting reserved cursor position or tabbing index, like in snippets.



`#` -> Start of code
    > Used to start JEmmet format and write abbreviations format.



`##` -> Boilerplate
    > Used to generate main Java program boilerplate.



## Values, variables and functions

`$` -> Value

    > Used to tell what value it has. Only used with assignments with equal sign (=).



`<>` -> Value type of value, variable or function

    > Used to manually or explicitly set type to a variable or function.

    > Full syntax: `<[OptionalPrefixes]Type(OptionalModifiers)>`

    >> Supported types (`Type`):
        `Int` - integer,
        `Float` - float,
        `Double` - double,
        `Bool` - boolean or bool,
        `Str` - string,
        `Void` - void,
        `Dict` - hash map, hash table or dictionary (like JSON)
        `LinkedList` - linked list
        `DLinkedList` - double linked list
        `Vector2` - vector in 2D space (X and Y)
        `Vector3` - vector in 3d space (X, Y and Z)
        `Class(ClassName)` - class object
        `Exception` - exception class

    >> Supported prefixes (`[OptionalPrefixes]`):
        `!` - Constant/Final/Readonly
        `&` - Pointer
        `*` - Static
        `~` - Abstract

    > `(OptionalModifiers)` are only for some types, like class objects



`@` -> Variable declaration

    > Used to declare variable(s).

    > Full syntax: `@[vars<optionalType>=$optionalValue,..]` for mutiple or `@var<optionalType>=$optinalValue` for single variable.

    > Example: `@[myInt=$18, myStr<Str>, myArr=$[1, 2, 3]]` or `@mySecretIsHidden=$false`



`@~` -> Function declaration

    > Used to declare functions.

    > Full syntax: `@~functionName(optionalParameters){optinalExpressions}=$optionalReturnValue<ReturnType>

    > Example: `@~mediana(array[]){...}=$middle`



`@@` -> Class declaration

    > Used to declare classes.

    > Full syntax: `@@className+parentClass[[privProps][pubProps]]([methods])=${ConstructorInitialization}~{Destructor}`

    > Example: `@@Dog+Animal[[legs, arms, tail][name, age]]([walk, run, bark])=$("Princess", 3)`


## Conditional statements

`??` -> If statement

    > Used to check if something is true.

    > Full syntax: `??(conditions){expressions}

    > Example: `??(isHungry){eat()}



`:?` -> Else if statement

    > Used to check if last statement was false and new something is true. This can't work without previous if statement (`??`).

    > Full syntax: `:?(nextConditions){nextExpressions}`

    > Example: `:?(isThirsty){drink()}`



`:` -> Else

    > Used to check if all statements are false. This can't work without previous if statement (`??`).

    > Full syntax: `:{finalExpressions}`

    > Example: `:{|plog("I'm not hungry or thirsty")}`



## Loops

`%?` -> While loop

    > Used to create loop while something is true.

    > Full syntax: `%?(conditions){expressions}`

    > Example: `%?(canLastLonger){doPushUp()}



`%-` -> For loop

    > Used to create loop several times.

    > Full syntax: `%-(start, end, indexIncrement){expressions}`

    > Example: `%-(0, 10, 1){doPushUp() >> |plog(i)}`



`%--` -> For each loop

    > Used to create loop throught each element of an array.

    > Full syntax: `%--(item, items){expressions}

    > Example: `%--(shoppingItem, shoppingCart){getPrice(shoppingItem)}`



## Errors handling

`!?` -> Try statement

    > Used to look for runtime errors/exceptions (errors occured while program is executing).

    > Full syntax: `!?(throwsExceptions){expressions}`

    > Example: ``!?{`myAge = in.nextInt()`}``



`:!` -> Catch statement

    > Used to catch or expect and fix errors that occured in runtime. This can't work without previous try statement (`!?`)

    > Full syntax: `:!(exceptions){expressions}`

    > Example: `:!(InvalidTypeException){|plog("That\'s not a number!')}



`!!=` -> Throw statement

    > Used to throw or raise an error.

    > Full syntax: `!!=error(message)`

    > Example: `!!=InvalidArgumentException("Bad argument. Twitter moment")`



`!~` -> Finally statement

    > Used to execute last piece of code/expression, even if errors are handled or not; it has to run at any cost.

    > Full syntax: `!~{expressions}`

    > Example: `!~{|plog("change da world\nmy final message. Goodb ye")}



## Built-in functions

`|` -> Prefix for built-in functions

    > Used to access built-in functions.

    >> Functions:
        `plog(something)` - Print `something` to console/terminal/shell
        `and(conditions)` - Checks if all `conditions` are true
        `or(conditions)` - Checks if at least one of `conditions` is true