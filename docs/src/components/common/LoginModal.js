import React, { useState } from 'react';
import { firebase } from '@firebase/app';

import Logo from '../common/Logo';
import firebaseConfig from '../../constants/firebase';
import { setUser } from '../../utilities/auth';

const LoginModal = (props) => {
  const { open, toggle } = props;
  const [, setLoading] = useState(false);

  const hideModal = () => {
    toggle(false);
  };

  /**
   * on success login
   */
  const onSuccessLogin = (result) => {
    const { user } = result;

    setLoading(false);
    setUser(user);

    window.location.reload();
  };

  /**
   * on failure login
   */
  const onFailureLogin = (error) => {
    console.log({ error });
    setLoading(false);
  };

  /**
   * on click google btn
   */
  const onClickSocial = (platform) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    let provider;

    if (platform === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }

    if (platform === 'github') {
      provider = new firebase.auth.GithubAuthProvider();
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => onSuccessLogin(result))
      .catch(onFailureLogin);
  };

  return (
    <>
      <button
        className={`text-black fixed top-0  mt-5  mr-5 right-0 p-3 rounded-full h-10 flex justify-center items-center w-10 z-10 bg-white bg-opacity-75 ${
          open ? '' : 'hidden'
        }`}
        onClick={hideModal}
      >
        <i className={`${'icon-close'} text-sm`} />
      </button>
      <div
        className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${
          open ? '' : 'hidden'
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg w-7/12">
          <div className="text-center flex justify-center pt-10 pb-5">
            <Logo />
          </div>
          <div className="px-4 py-1 flex justify-center items-center relative">
            <h3 className="font-semibold text-lg">Sign up on Magnus UI</h3>
          </div>

          <div className="p-2 text-center px-10">
            Join our community of friendly folks discovering and sharing the
            snippets around magnus components.
          </div>
          <div className="flex justify-end items-center w-100 w-7/12 mx-auto  p-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                onClickSocial('google');
              }}
              className="mr-3 flex flex-1 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-400 rounded-md group hover:bg-gray-200 focus:outline-none"
            >
              <img src="/images/google-icon.png" className=" h-4 w-4" />
              <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                Google
              </span>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                onClickSocial('github');
              }}
              className="ml-3 flex flex-1 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-400 rounded-md group hover:bg-gray-200 focus:outline-none"
            >
              <span>
                <svg
                  className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                Github
              </span>
            </a>
          </div>
          <p className="text-center text-gray-600 text-xs pt-3 pb-5">
            We'll never post to any of your accounts without your permission.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
