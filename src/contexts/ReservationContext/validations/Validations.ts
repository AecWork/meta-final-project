import { ValueTypes } from "../../../components/business/Inputs/commonTypes.ts";
import { ReservationField } from "../ReservationContext.tsx";
import validateMobileNumber from "react-mobile-validator";

const PHONE_MSG = 'Please enter a correct phone number.'
const phone = (value: string, currMsg: string): string => (
    validateMobileNumber(value)
        ? currMsg
        : PHONE_MSG
);

const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_MSG = 'Please enter a correct email.'
const email = (value: string, currMsg: string): string => (
    !value.match(EMAIL_REGEXP)
        ? currMsg
        : EMAIL_MSG
);

const MAX_MSG = 'Value has to be lower than ';
const max = (max: number, value: number, currMsg: string) => (
    value > max
        ? MAX_MSG + max + '.'
        : currMsg
)

const MIN_MSG = 'Value has to be higher than ';
const min = (min: number, value: number, currMsg: string) => (
    value < min
        ? MIN_MSG + min + '.'
        : currMsg
)

const REQUIRED_MSG = 'This informtion is required.'
const required = (value: ValueTypes, currMsg: string): string => (
    !value
        ? REQUIRED_MSG
        : currMsg
);

const validateField = (field: ReservationField, value: ValueTypes): string => {
    let msg = '';
    try {
        switch(field){
            case ReservationField.CLIENTS_AMMOUNT:
                msg = required(value, msg);
                msg = min(1, value as number, msg);
                msg = max(25, value as number, msg);
                break;
            case ReservationField.EMAIL:
                msg = email(value as string, msg);
                msg = required(value, msg);
                break;
            case ReservationField.PHONE:
                msg = phone(value as string, msg);
                msg = required(value, msg);
                break;
            default:
                msg = required(value, msg);
        }
    } catch (e) {console.log(e)}

    return msg;
}

export default validateField;