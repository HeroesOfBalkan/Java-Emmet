---------------------------------

# Functionality, structure and logic behind Java Emmet (for developers and contributors)

Here is everything how is this extension made, its functionality and structure.

> Note: This is for developers and contributors. If you want to contribute, read then. If you don't plan contributing, this section is not for you.

Requirements to contribute are:

* TypeScript or JavaScript
* Visual Studio Code API

## Structure

Picture below shows the structure of extension.

[Structure of Java Emmet extension](images/Extension%20Structure.jpg)

First of all, extension program `extension.ts` checks if the active document (`Notebook` or `VirtualDocument` by VSC API) or active file (that is currently worked on) has `.java` extension. If so, program will continue execution. If not, program will ignore current document and wait for another document to be opened (or focused/active).

Runner program is also `extension.ts` where is managed if extension is enabled or disabled and listens to new line and hashtag symbol (`#`). If something else is typed instad of hashtag, extension will ignore this line and wait for next new line. White spaces like spaces and indentations won't affect listener. Then extension listens to next new line (or `enter` is pressed). Copies string from hashtag symbol (`#`) and new line (`enter` button) and passes to `main.ts` program, where string will be processed.

Main program is `main.ts`. `main.ts` scans for each character or symbol and check what characters mean. It reads based on "Rules" ("Rules" are objects specially designed to detect abbreviations and explain how to format specific abbreviations). If program has a match for a "rule", it will pass matched substring and "Rule" to `formatter.ts` where is processed that abbreviation and passes abbreviation back to `main.ts`.

What `main.ts` do to scan for each character uses "Divide and Conquer" technique. It splits or slices complex string into simple substrings. It is done with recursion.