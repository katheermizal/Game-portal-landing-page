import React from 'react';
import data from "../../../../source/data.json";

const  paymentIconsData = data.paymentIcons;

const PaymentIcons = () => (
    <div className="payment-icons">
        {
            paymentIconsData.map((icon, i) => {
                return (
                    <img 
                        key={ i }
                        src={ icon.iconUrl }  
                        height={ icon.iconHeight } 
                        alt={ icon.name } 
                        className={'payment-icon payment-icons__'+ icon.iconClass } 
                    />
                );
            })
        } 
    </div>
);

export default PaymentIcons;