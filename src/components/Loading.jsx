const Loading = () => {
  return (
    <div>
      <div className="m-8 text-center sm:mt-12">
        <button
          type="button"
          className="focus:shadow inline-flex cursor-pointer items-center justify-center rounded text-base font-bold uppercase tracking-widest text-gray-500 transition-all duration-200 ease-in-out hover:text-gray-900"
        >
          <svg
            className="mr-3 block h-4 w-4 align-middle uppercase tracking-wider"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              className="uppercase"
            ></path>
          </svg>
          Load more jokes
        </button>
      </div>
    </div>
  );
};

export default Loading;
