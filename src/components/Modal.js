import React from "react";

function Modal({children}) {
  return (
    <div>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="flex flex-col w-full bg-gray-100 rounded-md dark:bg-dark1 py-7 md:w-3/4 md:px-7 md:py-7">
          <div className="flex justify-between mb-5 mr-5">
            {children.title}
            {children.button}
          </div>
          <div>
            <div className="w-full">
                {children.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
