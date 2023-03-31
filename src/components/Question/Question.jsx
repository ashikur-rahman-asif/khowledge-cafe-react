import React from "react";

const Question = () => {
  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
    >
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
        >
          <span>Difference between Props and State?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        class="hidden"
        aria-labelledby="accordion-color-heading-1"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Props allow you to pass data from one component to other components
            as an argument
            <br />
            State holds information about the components.
          </p>
        </div>
      </div>
      <h2 id="accordion-color-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-2"
          aria-expanded="false"
          aria-controls="accordion-color-body-2"
        >
          <span>How does the useState hook work?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        class="hidden"
        aria-labelledby="accordion-color-heading-2"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The useState hook is a special function that takes the initial state
            as an argument and returns an array of two entries. UseState
            encapsulate only singular value from the state, for multiple state
            need to have useState calls.
          </p>
        </div>
      </div>
      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-3"
          aria-expanded="false"
          aria-controls="accordion-color-body-3"
        >
          <span>What is the practical use of useEffect?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        class="hidden"
        aria-labelledby="accordion-color-heading-3"
      >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            1.Running once on mount: fetch API data. Running on state change{" "}
            <br />
            2.validating input field. Running on state change: live filtering.{" "}
            <br />
            3.Running on state change: trigger animation on new array value.{" "}
            <br />
            4.Running on props change: update paragraph list on fetched API data
            update.
          </p>
        </div>
      </div>
      <h2 id="accordion-color-heading-4">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-3"
          aria-expanded="false"
          aria-controls="accordion-color-body-3"
        >
          <span>How the react-scripts start process works?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        class="hidden"
        aria-labelledby="accordion-color-heading-4"
      >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            1.Set the build environment into development for Node and Babel.{" "}
            <br />
            2.Ensure environment variables are read for the build process.{" "}
            <br />
            3.Verify the packages installed in your project are not outdated.{" "}
            <br />
            4.Check whether the code is in TypeScript or not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
