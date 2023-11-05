import React, { useState } from "react";
import { addCoundown } from "@utils/countdowns";
import { v4 as uuidv4 } from 'uuid';
import { ICountdown } from "@customTypes/types";

type AddCountdownProps = {
    closeFunction: any;
}

export const AddCountdown = (props: AddCountdownProps) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const handleAdd = () => {
        const newCountdown: ICountdown = {
            id: uuidv4(),
            title: title,
            date: new Date(date)
        }
        addCoundown(newCountdown);

        props.closeFunction();
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAdd();
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="title" className="text-neutral-700 dark:text-neutral-200 block py-2 text-lg">Title</label>
            <input
                required
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="py-3 px-4 text-xl block w-full rounded-sm text-neutral-900 placeholder:text-neutral-900 bg-neutral-100 hover:bg-white focus:bg-white mb-4 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ease-in-out duration-200"
            />
            <label htmlFor="date" className="text-neutral-700 dark:text-neutral-200 block py-2 text-lg">Date</label>
            <input
                required
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="py-3 px-4 text-xl block w-full rounded-sm text-neutral-900 bg-neutral-100 hover:bg-white focus:bg-white dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ease-in-out duration-200"
            />
            <div className="mt-8 flex-col">
                <button type="submit"
                  className="py-3 w-full bg-blue-500 text-white font-semibold text-lg rounded-sm hover:bg-blue-600 ease-in-out duration-200 mb-3">
                    Submit
                </button>
                <button onClick={props.closeFunction} className="py-3 w-full underline rounded-sm hover:text-neutral-900 text-neutral-700 text-lg dark:text-neutral-200 dark:hover:text-white dark:bg-neutral-800" type="button">
                  Cancel
                </button>
              </div>
        </form>
    );
};