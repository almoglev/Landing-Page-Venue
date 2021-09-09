import React,{useState, useEffect, useCallback} from 'react';
import {Slide} from "react-awesome-reveal";

const Timer = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })

    const renderItem = (time,text) =>(
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>

            <div className="countdown_tag">
                {text}
            </div>
        </div>
    )

    // the useCallback makes sure this function is called only if data in time has changed
    // no need to render the data by calling the function if there's no update
    const getCountdown = useCallback(
        (event_date) => {
            const time = Date.parse(event_date) - Date.parse(new Date())
    
            if (time < 0){
    
            }else{
                const seconds = Math.floor((time/1000)%60);
                const minutes = Math.floor((time/1000/60)%60);
                const hours = Math.floor((time/(1000*60*60))%24);
                const days = Math.floor((time/(1000*60*60*24)));
    
                setTime({
                    days,
                    hours,
                    minutes,
                    seconds
                })
            }
        },[])
    


    // useEffect starts as soon as the component starts
    useEffect (()=>{
        // call getCountdown every second
        setInterval(()=> getCountdown('Nov, 30, 2022, 20:30:00'),1000)
    },[getCountdown]) 


    return(
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>

                <div className="countdown_bottom">
                    {renderItem(time.days,'Days')}
                    {renderItem(time.hours,'Hours')}
                    {renderItem(time.minutes,'Mins')}
                    {renderItem(time.seconds,'Secs')}

                </div>
            </div>
        </Slide>
    )
}

export default Timer;