import React from "react";

function Modal({children}) {
  return (
    <div>
      <div class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="flex flex-col w-full bg-gray-100 rounded-md dark:bg-dark1 py-7 md:w-3/4 md:px-7 md:py-7">
          <div class="flex justify-between mb-5 mr-5">
            {children.title}
            {children.button}
          </div>
          <div>
            <div v-html="embed" class="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
