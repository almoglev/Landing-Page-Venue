import React, {useState, useEffect} from 'react';
import {Fade, Slide} from 'react-awesome-reveal';
import MyButton from '../utils/MyButton'

const Discount = () => {
    const end = 30;
    const[start, setStart] =  useState(0)

    const percentage = () => {
        if(start < end){
            setStart(prevCount => prevCount + 1)
        }
    }

    // everytime we change the state of start we want to catch it with useEffect (creating the animation of 1%-30%)
    // if no dependencies- useEffect will be triggered just once.
    // if there are dependencies (like [start] in this case), useEffect will listen to changes and triggered accordingly
    useEffect(()=>{
        if(start>0 && start<30){
            setTimeout(()=>{
                setStart(prevCount => prevCount + 1)
            },30)
        }
    },[start])

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">

                {/* everytime this component is visible, it'll trigger this callback function */}
                <Fade
                    onVisibilityChange={(inView)=>{
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_percentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide>
                    <div className="discount_description">
                        <h3>Purchase ticket before 20th June</h3>
                        <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                        </p>
                        <MyButton
                            text="Purchase tickets"
                            link="https://www.theticketfactory.com"
                            size="small"
                            style={{
                                background:'#ffa800',
                                color:'#ffffff'
                            }}
                            iconTicket={true}
                        />
                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default Discount;