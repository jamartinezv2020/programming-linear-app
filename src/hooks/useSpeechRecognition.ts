import { useState } from "react";

const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState<string>("");

  const startRecognition = () => {
    if (
      !("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
      alert("El reconocimiento de voz no está soportado en este navegador.");
      return;
    }

    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.lang = "es-ES";
    recognition.interimResults = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const lastResult = event.results[event.resultIndex];
      const transcript = lastResult[0].transcript;
      setTranscript(transcript);
    };

    recognition.start();
  };

  return { transcript, startRecognition };
};

export default useSpeechRecognition;
