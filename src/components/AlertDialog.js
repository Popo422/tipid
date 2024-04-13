export default function AlertDialog(props) {
  const {
    open,
    onClose,
    title,
    content,
    actionLabel,
    actionClass,
    onAction,
    closeLabel,
    hideAction,
    hideClose,
  } = props;

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
              className="relative transform overflow-hidden rounded-lg
            bg-white text-left shadow-xl transition-all w-full md:w-full sm:max-w-md"
            >
              {title && (
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="text-l font-semibold leading-6 text-gray-900">
                    {title}
                  </div>
                </div>
              )}
              {content && (
                <div className="px-6 py-2 flex flex-row text-sm text-gray-500">
                  {content}
                </div>
              )}
              <div className="py-4 flex justify-between flex-row px-6">
                {!hideAction && (
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center 
                  secondary-color px-3 py-2 text-sm font-semibold text-white shadow-sm ${actionClass}`}
                    onClick={onAction}
                  >
                    {actionLabel ?? "Confirm"}
                  </button>
                )}
                {!hideClose && (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center 
                    bg-primary-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm self-end"
                    onClick={onClose}
                  >
                    {closeLabel ?? "Cancel"}
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
