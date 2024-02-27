import React from "react";
import validateField from "./validations/Validations.ts";

export enum ReservationField {
    CLIENTS_AMMOUNT = 'clientsAmmount',
    DATE = 'date',
    TIME = 'time',
    NAME = 'name',
    EMAIL = 'email',
    PHONE = 'phone'
}

interface ReservationData {
    [ReservationField.CLIENTS_AMMOUNT]: number,
    [ReservationField.DATE]: string,
    [ReservationField.TIME]: string,
    [ReservationField.NAME]: string,
    [ReservationField.EMAIL]: string,
    [ReservationField.PHONE]: string
}

interface ReservationDataErrors {
    [ReservationField.CLIENTS_AMMOUNT]: string,
    [ReservationField.DATE]: string,
    [ReservationField.TIME]: string,
    [ReservationField.NAME]: string,
    [ReservationField.EMAIL]: string,
    [ReservationField.PHONE]: string
}

const EMPTY_RESERVATION: ReservationData = {
    [ReservationField.CLIENTS_AMMOUNT]: NaN,
    [ReservationField.DATE]: '',
    [ReservationField.TIME]: '',
    [ReservationField.NAME]: '',
    [ReservationField.EMAIL]: '',
    [ReservationField.PHONE]: ''
}

const EMPTY_ERRORS: ReservationDataErrors = {
    [ReservationField.CLIENTS_AMMOUNT]: '',
    [ReservationField.DATE]: '',
    [ReservationField.TIME]: '',
    [ReservationField.NAME]: '',
    [ReservationField.EMAIL]: '',
    [ReservationField.PHONE]: ''
}

type UpdateFunc = (value: number | string, field: ReservationField) => void
type ValidateFunc = () => boolean

interface IReservationContext {
    data: ReservationData
    errors: ReservationDataErrors
    validateAll: ValidateFunc
    updateValue: UpdateFunc
}

const ReservationContext = React.createContext<IReservationContext>({
    data: EMPTY_RESERVATION,
    errors: EMPTY_ERRORS,
    validateAll: () => true,
    updateValue: () => {}
});

export const ReservationContextProvider = ({ children }) => {
    const [reservationData, setReservationData] = React.useState<ReservationData>(EMPTY_RESERVATION);
    const [errors, setErrors] = React.useState<ReservationDataErrors>(EMPTY_ERRORS);

    const updateValue = React.useCallback<UpdateFunc>((value, field) => {
        setReservationData(prev => ({...prev, [field]: value}));
        setErrors(prev => ({...prev, [field]: validateField(field, value)}));
    }, []);

    const validateAll = React.useCallback<ValidateFunc>(() => {
        Object.keys(reservationData).forEach(field => {
            setErrors(prev => ({...prev, [field]: validateField(field as ReservationField, reservationData[field])}));
        })

        if (errors === EMPTY_ERRORS) return true;
        return false;
    }, [errors, reservationData]);

    return (
        <ReservationContext.Provider
            value={{
                data: {...reservationData},
                errors: {...errors},
                validateAll,
                updateValue
            }}
        >
            { children }
        </ReservationContext.Provider>
    );
};

export const useReservation = () => React.useContext(ReservationContext);