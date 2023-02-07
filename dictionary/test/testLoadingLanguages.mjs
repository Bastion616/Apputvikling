import Dictionary from "../Dictionary.mjs"

(function runTests(){
    testLanguage();
})();

function testLanguage(){
    const languages = ["./test/lan/no.json", "./test/lan/en.json"];
    const dictionary = new Dictionary(...languages);
    dictionary.setLanguage("en");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}

function test(test, description){
    if(test){
        console.log(`🟢 ${description}`)
    } else{
        console.log(`🔴 ${description},  ${test}`)
    }
}