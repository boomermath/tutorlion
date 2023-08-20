import {useEffect, useState} from "react";

export default function Counter({number}) {
    const [num, setNum] = useState(0);

    useEffect(() => {
        if (num < number) {
            setTimeout(() => setNum(n => ++n), 25);
        }
    }, [num])

    return <span>{num}</span>
}