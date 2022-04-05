import React from 'react'
import "./Pi.css";

export const Pi = () => {
    return (
        <div className="Parent">
            <div className="ItemFlex">
                <h1 className="Title_name">Father's Name :</h1>
                <h3 className="Item_margin">Adesh Kumar</h3>
            </div>
            <div className="ItemFlex">
                <h1 className="Title_name">Date of Birth :</h1>
                <h3 className="Item_margin">06th of July, 1996</h3>
            </div>
            <div className="ItemFlex">
                <h1 className="Title_name">Address :</h1>
                <h3 className="Item_margin">Hno. 386/A, Hanumanpur,<br></br> Pt. Deen Dayal Upadhaya Nagar</h3>
            </div>
        </div>
    )
}
