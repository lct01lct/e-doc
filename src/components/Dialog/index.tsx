import { Dialog, Transition } from '@headlessui/react';
import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  useImperativeHandle,
  useState,
  forwardRef,
  cloneElement,
  ReactElement,
} from 'react';

export interface EDocDialogProps {
  reference: ReactNode;
}

export interface EDocDialogRefs {
  open: () => void;
  close: () => void;
}

export const EDocDialog = forwardRef<EDocDialogRefs, PropsWithChildren<EDocDialogProps>>(
  ({ children, reference }, refs) => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }

    useImperativeHandle(refs, () => ({
      close: closeModal,
      open: openModal,
    }));

    const wrapperReference = cloneElement(reference as ReactElement, {
      onClick: openModal,
    });

    return (
      <>
        {wrapperReference}

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
);