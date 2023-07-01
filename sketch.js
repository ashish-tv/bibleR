var response;

var isBook=1;
var finalBook="matthew";
var finalChapter="1";
var finalVerse="1";
var verse="";
var message = document.querySelector('#message');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = "#JSGF V1.0;; grammar books; public <books> = matthew| mark | luke | john | acts | romans|   corinthians | first corinthians | second corinthians | galatians| ephesians | philippians | colossians |thessalonians |first  thessalonians |second  thessalonians |  timothy | first timothy |second timothy | titus | philemon | hebrews | james | peter | first peter | second peter | first john | second john| third john | jude | revelation | ecclesiastes | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;public <command> = ( hi there | whats up | how are you );";
//books.weight=2
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.continuous = true;//false;//true;
        recognition.maxAlternatives = 7;



        recognition.onresult = function(event) {
          
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            message.textContent = 'Voice Input: ' + command + '.';
//print(command,event.results[0][0].transcript )
          //console.log(soundex(command));
          command=command.replace('.', '');
          command=command.replace(',', '');
          command=command.replace('?', '');
           var splitCommand=  command.split(" ")
           console.log(splitCommand)
        var combinedCommand=""
           for (const smallWords of splitCommand){
             combinedCommand=combinedCommand + " " + pronouncing.phonesForWord(smallWords.toLowerCase())[0];
             console.log(combinedCommand)    
}
  
                       printResults()
          
     function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}     
 function getText(response) {
    console.log(response);
  }
  function printResults()
{                    var booksP =["M AE1 TH Y UW0","M AA1 R K","L UW1 K","JH AA1 N","AE1 K T S","R OW1 M AH0 N Z","F ER1 S T K ER0 IH1 N TH IY0 AH0 N Z","S EH1 K AH0 N D K ER0 IH1 N TH IY0 AH0 N Z","G EY1 ZH AH0 N Z", "IH0 F SH AH0 N Z","F IH1 L IH1 P IY1 AH0 N Z", "K AH0 L AA1 ZH AH0 N Z","F ER1 S T TH AH0 S AO1 L OW1 N IY0 AH0 N Z","S EH1 K AH0 N D TH AH0 S AO1 L OW1 N IY0 AH0 N Z","F ER1 S T T IH1 M AH0 TH IY0","S EH1 K AH0 N D T IH1 M AH0 TH IY0","T AY1 T AH0 S","F AH0 L EY1 M AH0 N","HH IY1 B R UW0 Z","JH EY1 M Z","F ER1 S T P IY1 T ER0","S EH1 K AH0 N D P IY1 T ER0","F ER1 S T JH AA1 N","S EH1 K AH0 N D JH AA1 N","TH ER1 D JH AA1 N","JH UW1 D","R EH2 V AH0 L EY1 SH AH0 N"]
          var books =["Matthew","Mark","Luke","John","Acts","Romans","1Corinthians","2Corinthians","Galatians","Ephesians","Philippians","Colossians","1Thessalonians","2Thessalonians","1Timothy","2Timothy","Titus","Philemon","Hebrews","James","1Peter","2Peter","1John","2John","3John","Jude","Revelation"]
  
  
  
          var maxLevestein=100
          var similarBookP=""
          var bookIndex =0
          for(const bookP of booksP){
            if(levestein(bookP, combinedCommand)<maxLevestein){maxLevestein=levestein(bookP, combinedCommand);similarBookP=books[bookIndex];}bookIndex=bookIndex+1; }
 console.log(similarBookP,"most similar Book",combinedCommand);
          
          if(isBook==0 && splitCommand.length==3){finalChapter=splitCommand[0];finalVerse=splitCommand[2];}
          
          
          
          if(isBook==1 && maxLevestein<30){finalBook=similarBookP;console.log(finalBook,"finalB");
                                                                             isBook=0;}
          console.log(similarBookP,maxLevestein,combinedCommand)
          maxLevestein=100
          similarBookP=""
          bookIndex =0

          if(!isNumeric(finalChapter)){
 console.log(finalChapter,"FC",isNumeric(finalChapter));           finalChapter=text2num(finalChapter.toLowerCase())}
          console.log(finalChapter, "final chapter")
          
          if(!isNumeric(finalVerse.toLowerCase())){finalVerse=text2num(finalVerse)}
          
          console.log(finalBook,finalChapter,finalVerse,"final")
          var path="https://labs.bible.org/api/?passage=" +finalBook+"+"+finalChapter+":"+finalVerse+"&formatting=plain"
          console.log(path)
          //httpGet( path,'text',getText)
          var label1=""


          if(isBook==1){document.querySelector('#btnGiveCommand').innerText='Say the name of the Book';console.log(isBook)}
 
          if(isBook==0){document.querySelector('#btnGiveCommand').innerText='say "____verse___"';console.log(isBook)}
          var verse= httpGet(path, 'text', getText);
          verses.textContent=verse
 reference.textContent=finalBook+" "+finalChapter+":"+finalVerse
console.log(httpGet(path, 'text', getText))
          

         
     document.getElementById("verses").innerHTML = verse;     
}
         
        };
recognition.onnomatch = (event) => {

 // print("nomatch")
};

        recognition.onspeechend = function() {
            //recognition.stop();
        };

        recognition.onerror = function(event) {
            message.textContent = 'Error occurred in recognition: ' + event.error;
        }        

        document.querySelector('#btnGiveCommand').addEventListener('click', function(){
            recognition.start();
isBook=1
          document.querySelector('#btnGiveCommand').innerText='Book'
        });


function readAPI(path){      // Making an API call (request)
      // and getting the response back
      const response = fetch(path);
      
      // Parsing it to JSON format
      //const data = response.text();
      console.log(response.results);}

function setup() {
  createCanvas(400, 400);
            path="https://labs.bible.org/api/?passage=John+3:16-17&formatting=plain"
  //httpGet( path,'text',getText);
  console.log(label1,"label")
}
function getText(verse){label1=verse;console.log(verse);}
function draw() {
  background(220);
}


////////////levestein distance
// Compute the edit distance between the two given strings
function levestein(a, b) {
  if (a.length === 0) return b.length; 
  if (b.length === 0) return a.length;

  var matrix = [];

  // increment along the first column of each row
  var i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i-1) == a.charAt(j-1)) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
};


var Small = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};

var Magnitude = {
    'thousand':     1000,
    'million':      1000000,
    'billion':      1000000000,
    'trillion':     1000000000000,
    'quadrillion':  1000000000000000,
    'quintillion':  1000000000000000000,
    'sextillion':   1000000000000000000000,
    'septillion':   1000000000000000000000000,
    'octillion':    1000000000000000000000000000,
    'nonillion':    1000000000000000000000000000000,
    'decillion':    1000000000000000000000000000000000,
};

var a, n, g;

function text2num(s) {
    a = s.toString().split(/[\s-]+/);
    n = 0;
    g = 0;
    a.forEach(feach);
    return n + g;
}

function feach(w) {
    var x = Small[w];
    if (x != null) {
        g = g + x;
    }
    else if (w == "hundred") {
        g = g * 100;
    }
    else {
        x = Magnitude[w];
        if (x != null) {
            n = n + g * x
            g = 0;
        }
        else { 
            //alert("Unknown number: "+w); 
          n=1;g=0;
        }
    }
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}