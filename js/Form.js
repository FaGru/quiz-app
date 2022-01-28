export default function Form(formElement) {
  //counter Add Question

  const addQuestionInput = formElement.querySelector(
    '[data-js="create__add-question"]'
  );
  const addQuestionOutput = formElement.querySelector(
    '[data-js="create__add-question-output"]'
  );
  const counter = 250;

  addQuestionInput.addEventListener('input', () => {
    const length = addQuestionInput.value.length;
    addQuestionOutput.value = counter - length + ' characters left';
  });

  // counnter add answer
  const addAnswerInput = formElement.querySelector(
    '[data-js="create__add-anwser"]'
  );
  const addAnswerOutput = formElement.querySelector(
    '[data-js="create__add-anwser-output"]'
  );
  const counterTwo = 120;
  addAnswerInput.addEventListener('input', () => {
    const lenght = addAnswerInput.value.length;
    addAnswerOutput.value = counterTwo - lenght + ' characters left';
  });
}
