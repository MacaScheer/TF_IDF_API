const Algorithmia = require("algorithmia");

/**
 * API calls will begin at the apply() method, with the request body passed as 'input'
 * For more details, see algorithmia.com/developers/algorithm-development/languages
 */

// var input = "Maca";
var input = [["badger badger buffalo mushroom mushroom mushroom mushroom mushroom mushroom mushroom", "antelope buffalo mushroom", "bannana"], 2];
Algorithmia.client("simBMDxEA9YaJoNZott3jFXuTwb1")
    .algo("nlp/KeywordsForDocumentSet/0.1.7")
    .pipe(input)
    .then(function (output) {
        console.log(output);
    });


// exports.apply = function (input, cb) {
//     cb(null, "Hello " + input);
// };
