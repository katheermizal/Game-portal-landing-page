import React from 'react';
import { Text, Button } from '../../FormElements';

const Subscribe = () => (
    <div className="subscribe">
        <form>
            <Text 
                type="email"
                name="subscribe"
                id="subscribe"
                labelText="Subscribe"
                wrapperClass="field__input label-hidden"
                inputClass="field__input--subscribe "
                placeholderText="Enter your email"
            />
            <Button type="submit">Subscribe</Button>
        </form>
    </div>
)

export default Subscribe;