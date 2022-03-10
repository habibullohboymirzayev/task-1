
var sampleText = "JavaScript is a must-know programming language for a modern devoloper"

function modifyText(text) {
    var spliterWord = text.split(" ").reverse().join(" ")
    var result1 = spliterWord
    
    return result1

}

function modifyText2(text) {
    var spliterWord2 = text.split("").reverse().join("")
    var result2 = spliterWord2

    return result2
}

console.log(modifyText(sampleText));
console.log(modifyText2(sampleText));