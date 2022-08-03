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

---------------------------------

# Abbreviations - Shorthands

Java Emmet extension has a lot of abbreviations, or shorthands. Those will be listed below.

## Abbreviations list
This is quick introduction of abbreviations. Full list can be found [here](./Abbreviations.md).

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

`+++` -> Import/Include libraries

---------------------------------

# How to use

## Start

As mentioned at the start, you have to type hashtag (#) in **new line** only. If you start typing in continuation, it won't work, just won't work. You **have to** start new line and write your format! White spaces like spacebar, tabulants or indents are ignored.

```java
...
// Non-compilant: simply doesn't work!
System.out.println("Look mom! I'm on TV!"); #??(isCool){|plog("Nice!")}:{|plog("zzz")}

...
// Compilant: now it's working!
System.out.println("Look mom! I'm on TV!");
#??(isCool){|plog("Nice!")}:{|plog("zzz")}

...
// Also compilant: white spaces are ignored.
abstract void guessWhat() {
    System.out.println("Look mom! I'm on TV!");
     #??(isCool){|plog("Nice!")}:{|plog("zzz")}
//  ^ whitespace here
}
...
```

Even it is modular and flexible, for specific abbeviations you need to follow the logic and for most to follow format/syntax. You can not use `else` before an `if` statement. Does it make any sense? Same here. 

What is good is that you can nest other formats inside your format. This is what I meant:

`#??(isCool){??(isMomHere){|plog("Nice!")}:?(isDadHere){|plog("I'm so proud of you!")}}:{|plog("zzz")}`

is same as:

``` java
if (isCool) {

    if (isMomHere) {
        System.out.println("Nice!");
    }

    else if (isDadHere) {
        System.out.println("I\'m so proud of you!");
    }
}

else {
    System.out.println("zzz");
}
```

## Copy / Clone / Repeat / Multiply

You can copy a function multiple times! To do this, type `*` after a abbreviation or expression brackets (`{}`) and type how much do you want to write that abbreviation with a whole number.

It should look like this:
`..{}*n..`, where `{}` is an expression followed by a abbreviation/function, `*` symbol for multiplying, `n` amount to be repeated or multiplied and `..` rest of the format. For some abbreviations that don't have expressions (`{}`) can go after parameters (`()`) for this feature.

Example:

`#??(isDivisableByTen){|plog("It's dividable by 10")}:?(...){...}*5:{|plog("It's not dividable at all..")}`

Is same as:

```java
if (isDivisableByTen) {
    System.out.println("It's dividable by 10");
}

else if (/*Reserved place 1*/) {
    /*Reserved place 2*/
}

else if (/*Reserved place 3*/) {
    /*Reserved place 4*/
}

else if (/*Reserved place 5*/) {
    /*Reserved place 6*/
}

else if (/*Reserved place 7*/) {
    /*Reserved place 8*/
}

else if (/*Reserved place 9*/) {
    /*Reserved place 10*/
}

else {
    System.out.println("It's not dividable at all..");
}
```

Now this is beautiful!

> Note: This doesn't work everywhere. Multiple use of multiplications also can lead to unwanted code. Wait 'till updates come.

> Note: This is not yet planned to be implemented. You will have to wait 'till that happens.

What is also possible is to copy whole code. Instead of one asterisk sign (`*`), use two asterisk signs (`**`) for this feature. I recommend only using when needed on specific functions.

Example:

`#??(isClone){...}:{...}**3`

Result:

```java
if (isClone) {
    /*Reserved place 1*/
}

else {
    /*Reserved place 2*/
}

if (isClone) {
    /*Reserved place 3*/
}

else {
    /*Reserved place 4*/
}

if (isClone) {
    /*Reserved place 5*/
}

else {
    /*Reserved place 6*/
}
```

## Counter and Iterator

If there are multiple variables that follow some pattern, Counter and Iterator will come to hand. To use Counter, type double dollar sign (`$$`) and it will replace double dollar signs with an number that is incremented by 1. You can also set how much to increment and from what value to start.

Examples:

`$$` (Starts from 1 and increments by 1), `$$5+2` (Starts from 5 and increments by 2), `$$-2-3` (Starts from -2 and decrements by 3), `$$'a'+2` (Starts from letter 'a' and goes on with every second letter of ASCII),...

> Note: Iterator is not yet available.