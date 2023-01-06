import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './OrderForm.module.css'

const OrderForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber.length < 1 ||
            enteredAmountNumber.length > 10
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref = {amountInputRef}
            label="Amount" 
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                // min, max, step = are validation props
                defaultValue: '1'
            }} />
            <button>+Add</button>
            {!amountIsValid && <p> Please enter a valid amount. </p>}
        </form>
    );
};

export default OrderForm;