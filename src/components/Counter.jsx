import {useEffect, useState} from "react";

const totalMs = 1200;
export default function Counter({number}) {
    const [num, setNum] = useState(0);

    useEffect(() => {
        if (num < number) {
            setTimeout(() => setNum(n => ++n), totalMs / number);
        }
    }, [num])

    return <span>{num}</span>
}