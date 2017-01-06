/*
Roberto Perez-Soriano
January 2017
*/


//Javascript Challenge Problem #1: Relationships
function getRelationship(x, y) {
    if (isNaN(x) && isNaN(y)) {
        return 'Can\'t compare relationships because ' + x + ' and ' + y + ' are not numbers';
    }
    else if(isNaN(x)) {
        return 'Can\'t compare relationships because ' + x + ' is not a number';
    }
    else if(isNaN(y)) {
        return 'Can\'t compare relationships because ' + y + ' is not a number';
    }
    else if (x < y) {
        return '<';
    }
    else if (x > y) {
        return '>';
    }
    else if (x===y) {
        return '=';
    }
}

//Javascript Challenge Problem #2: Astronaut Arrays
var  names = ["Neil Armstrong", "Buzz Aldrin", "Pete Conrad", "Alan Bean", "Alan Shepard", "Edgar Mitchell", "David Scott", "James Irwin", "John W Young", "Charles Duke", "Eugene Cernan", "Harrison Schmitt"];

function alphabetizer(_names) {
    sortedNames = _names.slice();

    for (var i = 0; i < sortedNames.length; i++) {
        var nameArray = sortedNames[i].trim().split(' ');

        if(nameArray.length > 2) {
            var swap = nameArray[2];

            nameArray[2] = nameArray[1];
            nameArray[1] = nameArray[0];
            nameArray[0] = swap + ',';
        }
        else {
            var tmp = nameArray[1];
            nameArray[1] = nameArray[0];
            nameArray[0] = tmp + ',';
        }

        sortedNames[i] = nameArray.join(' ');
    }

    return sortedNames.sort();
}

alphabetizer(names);


//Javascript Challenge Problem #3: Relationships

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var ruleResults = results.formattedResults.ruleResults;
    var finalResults = [];

    for(var key in ruleResults) {

        //Only objects properties included
        if(ruleResults.hasOwnProperty(key)) {
            finalResults.push(ruleResults[key].localizedRuleName);
        }
    }

    return finalResults;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var totalBytesResult;
    var a = parseInt(results.pageStats.totalRequestBytes);
    var b = parseInt(results.pageStats.htmlResponseBytes);
    var c = parseInt(results.pageStats.cssResponseBytes);
    var d = parseInt(results.pageStats.imageResponseBytes);
    var e = parseInt(results.pageStats.javascriptResponseBytes);
    var f = parseInt(results.pageStats.otherResponseBytes);

    totalBytesResult = a + b + c + d + e + f;
    return totalBytesResult;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));