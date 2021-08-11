import { useState } from "react";

export default function useVoice({str}) {
  const [phraseState, setPhraseState] = useState(null);
  const [events, setEvents] = useState(null);
  //var grammar = "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
  let phrase;
  let evento;
  var SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition;

  var SpeechGrammarList =
    window.SpeechGrammarList ||
    window.webkitSpeechGrammarList ||
    window.mozSpeechGrammarList ||
    window.msSpeechGrammarList ||
    window.oSpeechGrammarList;

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  //speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    phrase = event.results[event.results.length - 1][0].transcript;
    setEvents(event);
    setPhraseState(phrase || "");
  };

  return {
    phraseState,
    events,
  };
}
