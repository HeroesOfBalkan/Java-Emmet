import declareVariables from "./rules/declarations";

function codeExtractor(shortCode: string) {
    console.log(declareVariables(shortCode));
}


codeExtractor("mile<int>=64");

// export default declareVariables;