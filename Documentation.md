# Brief usage

To use this extension, you start typing hashtag (#) in new line, then go with abbreviations or sequences of abbreviations, but it has to match format as it is defined. After finishing your sequence, press Enter to generate code from your "hyeroglyphes"

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

> To be fulfilled