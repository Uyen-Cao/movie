import React, {useEffect, useState} from 'react'

export default function Seat(props) {
    const [seatVip, setSeatVip] = useState(false);
    useEffect(() => {
        let seat = 0;
        let lastSeat = 30;
        for(let i = 1; i <= 6 ; i++){
            seat = lastSeat + 5;
            lastSeat = seat + 11;
            if(props.id >= seat && props.id <= lastSeat){
                setSeatVip(true)
            }
        };
    }, []);
    return (
        <>
         <button id={props.id} className={`btn px-1 py-0 seat-button ${seatVip ? "text-warning" : ""}`}>
                <i class="fa fa-stop"></i>
         </button>   
        </>
    )
}

