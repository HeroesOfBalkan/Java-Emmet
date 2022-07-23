# Brief usage

To use this extension, you start typing hashtag (#) in **new line**, then go with abbreviations or sequences of abbreviations (listed below), but it has to match format as it is defined. After finishing your sequence, press Enter to generate code from your "hyeroglyphes".

You probably have heard of HTML Emmet or just Emmet before, so why don't we use similar idea?

The JEmmet format follows somewhat Curly brackets-like (or C-like) syntax.

> Note: You may notice there are more symbols like hashtag (#), dollar sign ($), percentage (%), and mark (&), et symbol (@) and et cetara. This is to avoid confusion with reserved words, variables and functions of your actual program/code.

> Contribution: It is available on GitHub. To contribute, make sure you read this documentation.

For an example:

```java
...
public static void main(String[] args) {
    #@[firstName=$"John", lastName=$'Doe', age=$32, salarryMonth=$4999.99, position=$'Manager', isSlacking=$false]
}
...
```

is equal to:

```java
public static void main(String[] args) {
    String firstName = "John";
    String lastName = "Doe";
    int age = 32;
    double salaryMonth = 4999.99;
    String position = "Manager";
    boolean isSlacking = false
}
...
```

or another example:

```
#??(|and(|between(salaryMonth, 3000.00, 7500.00)), |not(isSlacking)){salaryMonth=$8000.00} :??(isSlacking){salaryMonth=$0.00}
```

is equal to:

```java
if (salaryMonth > 3000.00 && salaryMonth < 7500.00) {
    salaryMonth = 8000.00;
}
else if (!isSlacking) {
    salaryMonth = 0.00;
}
```

Don't worry, everything will be explained.

--------------------------------------------------

# Abbreviations - Shorthands

Java Emmet extension has a lot of abbreviations, or shorthands. Those will be listed below.

## Abbreviations list

### Common stuff

`()` -> Parameters
`[]` -> Array
`{}` -> Expression
` \`\` ` -> Custom code (Actual injected Java code)

`,` -> Next parameter
`>>` -> Next sequence
`...` -> Reserved pointer position (*"for later"*)

`#` -> Start of code
`##` -> Boilerplate

### Values, variables and functions

`$` -> Value

`@` -> Variable declaration
`@~` -> Function declaration
`@@` -> Class declaration

`<>` - Type of value, variable or function

### Conditional statements

`??` -> If statement
`:?` -> Else If statement
`:` -> Else statement

### Loops

`%?` - While loop
`%-` -> For loop
`%--` -> For each loop

### Error handling

`!?` -> Try statement
`:!` -> Catch/Expect statement
`!%` -> Throw statement

### Built-in functions

`|` -> Prefix for built-in functions

`plog(something)` -> Print to console/terminal/shell
    `something`:  Any variable or value
`and(params)` -> Checks if all parameters are true
    `params`: Array of elements or Array variable/constant
`or(params)` -> Checks if at least one parameter is true
    `params`: Array of elements or one array variable/constant

### Others

`+++` -> Import/Include of libraries

--------------------------------------------------

# How to use

As mentioned at the start, you have to type hashtag (#) in **new line** only. If you start typing in continuation, it won't work, just won't work. You **have to** start new line and write your format! White spaces like spacebar, tabulants or indents are ignored.

```java
...
// Non-compilant: simply doesn't work!
System.out.println("Look mom! I'm on TV!"); @??(isCool){|plog("Nice!"):|plog("zzz")}

...
// Compilant: now it's working!
System.out.println("Look mom! I'm on TV!");
@??(isCool){|plog("Nice!"):{|plog("zzz")}}

...
// Also compilant: white spaces are ignored.
abstract void guessWhat() {
    System.out.println("Look mom! I'm on TV!");
    @??(isCool){|plog("Nice!"):{|plog("zzz")}}
}
...
```