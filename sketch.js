let speech;
let speak;
let button1;
let song;
let button2;

let serial; 
let latestData = "waiting for data";

function preload(){
    song = loadSound('Chinese toy phone.mp3');
}

function setup() {
  noCanvas();
  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open('/dev/tty.usbmodem141101');
  // callback for when the sketchs connects to the server
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);
  ////////////
  
  button1 = createButton("A");
  button1.mousePressed(voice);
  button2 = createButton("B");
  button2.mousePressed(music);


  //listening
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  let continuous = true;
  let interimResults = false;
  speechRec.start(continuous, interimResults);
  let output = select('#speech');

  function gotSpeech() {
    if (speechRec.resultValue) {
      createP(speechRec.resultString)
    }
  }

  //speaking
  speak = new p5.Speech(voiceReady);
  speak.started(startSpeaking);

 function startSpeaking() {}
  
  function voiceReady() {
    console.log(speak.voices);
  }
  
}

function serverConnected() {
  print("Connected to Server");
}

// list the ports
function gotList(thelist) {
  print("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable

if (latestData==1){
    music();
    }
  
if (latestData==0){
  
    voice();
}

}

function music() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

//voice

function voice() {
  speak.setVoice('Google 國語（臺灣）');
  speak.setPitch (1.3)
  speak.speak('hi I am qwert and I will write for you '); // what qwert will say
}