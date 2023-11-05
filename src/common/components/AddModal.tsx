import { useState, Fragment } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';
import { Dialog, Transition } from '@headlessui/react';
import { AddCountdown } from "./AddCountdown";

export const AddModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={openModal} type="button"
        className="py-3 px-7 flex gap-4 items-center bg-neutral-700 text-neutral-200 rounded-sm hover:text-white ease-in-out duration-200 dark:bg-neutral-200 dark:text-neutral-700 dark:hover:text-neutral-900">
        Add Countdown
        <PlusIcon className="h-4 w-4" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className="w-full sm:w-3/4 xl:w-1/3 transform overflow-hidden rounded-2xl bg-neutral-200 px-12 pt-12 pb-8 text-left align-middle shadow-xl transition-all dark:bg-neutral-900 text-neutral-200">
                  <Dialog.Title as="h3" className="text-4xl leading-5 text-neutral-900 dark:text-neutral-200 font-bold">
                    Add Countdown
                  </Dialog.Title>
                  <div className="mt-2">
                    <AddCountdown closeFunction={closeModal} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};