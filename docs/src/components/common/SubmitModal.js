import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { submitSnippetValidator } from '../../validators/snippetValidators';

import Logo from '../common/Logo';
import { categories } from '../../constants/categories';
import SnippetService from '../../services/SnippetService';

let formikProps;

const LoginModal = (props) => {
  const { open, toggle } = props;
  const [loading, setLoading] = useState(false);

  /**
   * on click google btn
   */
  const onSubmit = (values) => {
    const { isSubmitting, setSubmitting, setStatus, resetForm } = formikProps;

    if (isSubmitting) {
      SnippetService.create({
        embed: values.embed,
        category: values.category,
        published: false,
        title: '',
        description: '',
        slug: '',
        image: '',
      })
        .then(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ successMessage: 'Snippet submitted successfully' });
        })
        .catch((error) => {
          setSubmitting(false);
          setStatus({ errorMessage: error.message });
        });
    }
  };

  return (
    <>
      <button
        className={`text-black fixed top-0  mt-5  mr-5 right-0 p-3 rounded-full h-10 flex justify-center items-center w-10 z-10 bg-white bg-opacity-75 ${
          open ? '' : 'hidden'
        }`}
        onClick={() => toggle(false)}
      >
        <i className={`${'icon-close'} text-sm`} />
      </button>
      <div
        className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${
          open ? '' : 'hidden'
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg w-5/12 px-12 py-12">
          <div className="text-center flex justify-center pb-5">
            <Logo />
          </div>
          <div className="px-4 pt-2 flex justify-center items-center relative">
            <h3 className="font-semibold text-lg">
              Submit snack/codesandbox embed
            </h3>
          </div>

          <div className="p-1 text-center text-gray-600 px-10 w-9/12 mx-auto">
            Feel free to submit tutorials in any language.
          </div>
          <Formik
            initialValues={{ embed: '', category: 'buttons' }}
            onSubmit={onSubmit}
            validationSchema={submitSnippetValidator}
          >
            {(props) => {
              const {
                values,
                status,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;

              formikProps = props;

              return (
                <form
                  onSubmit={handleSubmit}
                  className="w-50 w-md-100 px-4 px-md-0 mx-auto mt-4 mt-md-5"
                >
                  <div className="w-100">
                    {/* error message */}
                    {status?.errorMessage && (
                      <div className="relative flex flex-col sm:flex-row sm:items-center bg-white border rounded-md my-5 py-2 pl-6 pr-8 sm:pr-6">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                          <i className="icon-close text-red-600" />

                          <div className="text-sm font-medium ml-3">
                            Something went wrong. Please try again later.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* success message */}
                    {status?.successMessage && (
                      <div className="relative flex flex-col sm:flex-row sm:items-center bg-white border rounded-md my-5 py-2 pl-6 pr-8 sm:pr-6">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                          <i className="icon-checkmark text-green-500" />

                          <div className="text-sm font-medium ml-3">
                            Your snippet have been saved successfully.
                          </div>
                        </div>
                      </div>
                    )}
                    {/* embed */}

                    <div className="mb-3">
                      <label className="font-bold text-sm mb-2 ml-1">
                        Embed/URL
                      </label>
                      <div>
                        <textarea
                          name="embed"
                          value={values.embed}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full h-32 px-3 py-2 mt-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                      <p className="text-red-700 small">
                        {touched.embed && errors.embed}
                      </p>
                    </div>
                    <label className="font-bold text-sm mt-4 mb-3 block ml-1">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        id="grid-state"
                        name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      >
                        {categories.map((category) => (
                          <option value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 mt-3 pin-r flex items-center px-2 text-grey-darker">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <button
                      className={`mt-5 w-full shadow bg-primary-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-lg ${
                        isSubmitting ? 'cursor-wait' : ''
                      }`}
                      type="submit"
                    >
                      {isSubmitting ? 'Submitting' : 'Submit'}
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
          <p className="text-center mt-8">
            Have you read our{' '}
            <a
              target="_blank"
              href="/submission-criteria"
              className="text-primary-500"
            >
              submission guidelines
            </a>
            ?
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
