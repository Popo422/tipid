export default function UnsavedChanges(props) {
  const { open, onClose, title, titleClass, content, contentClass, subContentClass, subContent, actionLabel, actionClass, onAction, closeLabel, closeClass, hideAction, hideClose } = props;

  if (!open) {
    return <div />;
  }

  return (
    <>
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-950 bg-opacity-60 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 md:w-full">
            <div
              className="relative transform overflow-hidden rounded-lg divide-y-2
              bg-white text-left shadow-xl transition-all w-full md:w-full sm:max-w-md md:h-auto flex  flex-col justify-between"
            >
              {title && (
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div
                    className={`text-l font-semibold leading-6 text-gray-900 ${titleClass}`}
                  >
                    {title}
                  </div>
                </div>
              )}
              {content && (
                <div
                  className={`flex flex-row text-blue-800 h-full text-sm md:text-lg items-center font-bold ${contentClass}`}
                >
                  <div className="flex w-fulll h-full items-center text-center p-4">
                    {" "}
                    {content}
                  </div>
                </div>
              )}
              {subContent && (
                <div
                  className={`flex flex-row text-blue-800 h-full text-sm md:text-lg items-center font-bold ${subContentClass}`}
                >
                  <div className="flex w-full h-full items-center text-center p-4">
                    {subContent}
                  </div>
                </div>
              )}
              <div className="py-4 flex justify-between flex-row px-6">
                {!hideClose && (
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center 
                      bg-primary-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm self-end  rounded`}
                    onClick={onClose}
                  >
                    {closeLabel ?? "Cancel"}
                  </button>
                )}
                {!hideAction && (
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center 
                    secondary-color px-3 py-2 text-sm font-semibold text-white shadow-sm rounded ${actionClass} `}
                    onClick={onAction}
                  >
                    {actionLabel ?? "Confirm"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
