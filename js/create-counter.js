export function createCounter() {
  // create
  //counter Add Question

  const addQuestionInput = document.querySelector(
    '[data-js="create__add-question"]'
  );
  const addQuestionOutput = document.querySelector(
    '[data-js="create__add-question-output"]'
  );
  const counter = 250;

  addQuestionInput.addEventListener('input', () => {
    const length = addQuestionInput.value.length;
    addQuestionOutput.value = counter - length + " sign's left";
  });

  // counnter add answer
  const addAnswerInput = document.querySelector(
    '[data-js="create__add-anwser"]'
  );
  const addAnswerOutput = document.querySelector(
    '[data-js="create__add-anwser-output"]'
  );
  addAnswerInput.addEventListener('input', () => {});
}
