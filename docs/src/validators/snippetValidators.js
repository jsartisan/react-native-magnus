import * as yup from 'yup';

export const submitSnippetValidator = yup.object().shape({
  embed: yup.string().required().min(1),
});
