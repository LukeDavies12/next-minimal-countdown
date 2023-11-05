import { useState, useEffect } from "react";
import { ICountdown } from "@customTypes/types";
import { getCountdowns, getCountdownDays, deleteCountdown, orderCountdowns } from "@utils/countdowns";

export const CountdownList = () => {
    const [countdowns, setCountdowns] = useState<ICountdown[]>([]);

    useEffect(() => {
        async function init() {
          const data = await getCountdowns(); 
          setCountdowns(data);
        }
        init();
    }, [countdowns]);

    const handleDelete = (countdownId: string) => {
        deleteCountdown(countdownId);
    };
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
            {orderCountdowns(countdowns).map((countdown) => (
                <div key={countdown.id} className="w-full bg-neutral-100 p-8 rounded-3xl group dark:bg-neutral-800">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{countdown.title}</h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-lg mt-1">{new Date(countdown.date).toUTCString().slice(0,16)}</p>
                    <div className="flex mt-24 justify-between items-baseline">
                        <h3 className="text-4xl text-neutral-90 dark:text-neutral-100 font-bold">{getCountdownDays(countdown.date.toString())} <span className="text-xl">days left</span></h3>
                        <button onClick={() => handleDelete(countdown.id)} className="underline text-neutral-700 dark:text-neutral-300 hidden group-hover:inline-block">delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};