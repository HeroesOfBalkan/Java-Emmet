function declareVariable(rawSubstring: string) {
    let finalString = "";

    let typePosition = rawSubstring.indexOf("<");
    let valuePosition = rawSubstring.indexOf("=");
    
    if (!typePosition && !valuePosition) {
        return rawSubstring;
    }

    let name: string = rawSubstring.substring(0, valuePosition | typePosition);

    let type: string = rawSubstring.substring(typePosition + 1, rawSubstring.indexOf(">"))

    let value: string = rawSubstring.substring(valuePosition, rawSubstring.length());

    return type + " " + name + " " + value;
}



function declareVariables(rawString: string) {
    let name: string = "";
    let type: string = "";
    let initialValue: string = "";
    let readyString: string = "";

    let startingIndex: number = rawString.indexOf("[");
    let endingIndex: number = rawString.indexOf("]");
    // if (rawString[0] === "[")

    while (startingIndex < endingIndex) {
        let next = rawString.indexOf(",");
        let newVariable = declareVariable(rawString.substring(startingIndex, next))
        readyString += newVariable + ", ";
        startingIndex = next;
    }

    return readyString;
}

export default declareVariables;