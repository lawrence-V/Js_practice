function reverseSentence(string) {

     const reversed = string.trim()
                    .split('')
                    .reverse()
                    .join('')

    return reversed[0].toUpperCase()
                + reversed.substring(1)
                +(reversed[reversed.length-1] === "." ? "" : ".")


}
console.log(reverseSentence('yawa dna pu pu'));



