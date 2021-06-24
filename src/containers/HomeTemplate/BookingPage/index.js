import React from 'react'
import SeatSection from "./SeatSection"
import PaymentSection from "./PaymentSection"
import Menu from "./MenuSection"

export default function BookingPage() {
    return (
        <div className="booking">
            <div className="row">
                <div className="booking-seat pr-0 col-8">
                    <Menu/>
                    <SeatSection/>
                </div>
                <div className="booking-payment p-0 col-4">
                    <PaymentSection/>
                </div>
            </div>
        </div>
    )
}
