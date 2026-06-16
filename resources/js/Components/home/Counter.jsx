import Box from '../Box';
import Button from '../Button';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increaseHandler = () => {
        setCount((prev) => {
            return prev + 1;
        });
    };

    const decreaseHandler = () => {
        setCount((prev) => {
            return prev - 1;
        });
    };

    const resetHandler = () => {
        setCount(0);
    };

    return (
        <Box title="Counter" grow>
            <div className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-center text-xl font-bold">
                {count}
            </div>
            <Button
                label="Erhöhen"
                variant="success"
                className="w-full"
                onClick={increaseHandler}
            ></Button>

            <Button
                label="Verringern"
                variant="warning"
                className="w-full"
                onClick={decreaseHandler}
            ></Button>

            <Button
                label="Zurücksetzen"
                variant="error"
                className="w-full"
                onClick={resetHandler}
            ></Button>
        </Box>
    );
}
