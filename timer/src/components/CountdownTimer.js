import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                updateTimer();
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, hours, minutes, seconds]);

    useEffect(() => {
        setCurrentTime(`${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`);
    }, [hours, minutes, seconds]);

    const updateTimer = () => {
        let h = parseInt(hours, 10);
        let m = parseInt(minutes, 10);
        let s = parseInt(seconds, 10);

        if (s > 0) {
            setSeconds(padNumber(s - 1));
        } else {
            if (m > 0) {
                setSeconds('59');
                setMinutes(padNumber(m - 1));
            } else {
                if (h > 0) {
                    setSeconds('59');
                    setMinutes('59');
                    setHours(padNumber(h - 1));
                } else {
                    setIsActive(false);
                }
            }
        }
    };

    const padNumber = (num) => {
        return num < 10 ? '0' + num : num.toString();
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        setCurrentTime('');
    };

    return (
        <div>
            <div>
                <label>Hours:</label>
                <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} />
            </div>
            <div>
                <label>Minutes:</label>
                <input type="text" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
            </div>
            <div>
                <label>Seconds:</label>
                <input type="text" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            </div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            {isActive && currentTime && <p>Current Time: {currentTime}</p>}
        </div>
    );
};

export default CountdownTimer;
