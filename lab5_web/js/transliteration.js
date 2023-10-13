const cyrillicLatin = {
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "H",
    "Ґ": "G",
    "Д": "D",
    "Є": "Ye",
    "Ж": "Zh",
    "З": "Z",
    "Ї": "Yi",
    "Й": "Y",
    "И": "Y",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Т": "T",
    "Н": "N",
    "П": "P",
    "О": "O",
    "Р": "R",
    "С": "S",
    "У": "U",
    "Ф": "F",
    "Х": "Kh",
    "Ц": "Ts",
    "Ч": "Ch",
    "Ш": "Sh",
    "Щ": "Shch",
    "Ю": "Yu",
    "Я": "Ya",
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "h",
    "ґ": "g",
    "д": "d",
    "є": "ye",
    "ж": "zh",
    "з": "z",
    "й": "y",
    "л": "l",
    "м": "m",
    "к": "k",
    "ї": "yi",
    "о": "o",
    "н": "n",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ю": "yu",
    "я": "ya",
    "и": "y",
}

const consonant = ['Л', "л", "Д" , "д", "С", "с", "Р", 'р', "Т", "т" , "Ц", "ц", "З", "з"];
const vowel = ['Ю', "ю", "Я" , "я", "Є", "є"];
function transferCyrillicToLatin(){
    const originalText = document.getElementById("cyrillic").value;
    let transliterationText = "";
    let counter = -1;

    for (let letter of originalText) {
        counter += 1;
        if (letter in cyrillicLatin) {
            if (counter !== 0 && vowel.includes(letter) && consonant.includes(originalText[counter - 1])) {
                transliterationText += "i" + cyrillicLatin[letter][1];
            }else {
                transliterationText += cyrillicLatin[letter];
            }
        } else{
            transliterationText += letter;
        }
    }
    document.getElementById("latin").value = transliterationText;
}