// worker.js

importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");
importScripts("https://cdn.jsdelivr.net/npm/@tensorflow-models/qna");

let model;

// Load the model on worker startup and notify main thread
(async () => {
  try {
    model = await qna.load();
    postMessage({ type: "model-loaded" });
  } catch (error) {
    postMessage({ type: "model-error", error: error.message });
  }
})();

onmessage = async function (e) {
  const { context, question } = e.data;

  if (!model) {
    postMessage({ type: "error", message: "Model is not loaded yet." });
    return;
  }

  try {
    const answers = await model.findAnswers(question, context);
    const value = answers.length > 0 ? answers[0].text : "No answer found.";
    postMessage({ type: "answer", value });
  } catch (err) {
    postMessage({ type: "error", message: err.message });
  }
};
