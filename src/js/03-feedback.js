import throttle from 'lodash.throttle';
import { getFromLS, removeFromLS, setToLS } from './utils/localStorage';

const LS_KEY_FORM_VALUES = 'feedback-form-state';
const THROTTLE_DELAY = 500;

const form = document.querySelector('.feedback-form');
const inputValuesState = getFromLS(LS_KEY_FORM_VALUES, {});

form.addEventListener('input', throttle(handleSaveValue, THROTTLE_DELAY));
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(`${name} => ${value}`));
  e.target.reset();
  removeFromLS(LS_KEY_FORM_VALUES);
}

function handleSaveValue(e) {
  const { name, value } = e.target;
  inputValuesState[name] = value;
  setToLS(LS_KEY_FORM_VALUES, inputValuesState);
}

(function onLoad() {
  if (Object.entries(inputValuesState).length !== 0) {
    Array.from(form.elements).forEach(element => {
      const { name } = element;
      if (name) {
        element.value = inputValuesState[name] || '';
      }
    });
  }
})();
