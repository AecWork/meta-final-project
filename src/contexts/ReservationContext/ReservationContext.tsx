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
    [ReservationField.CLIENTS_AMMOUNT]: 0,
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

interface IReservationContext {
    data: ReservationData
    errors: ReservationDataErrors
    updateValue: UpdateFunc
}

const ReservationContext = React.createContext<IReservationContext>({
    data: EMPTY_RESERVATION,
    errors: EMPTY_ERRORS,
    updateValue: () => {}
});

export const ReservationContextProvider = ({ children }) => {
    const [reservationData, setReservationData] = React.useState<ReservationData>(EMPTY_RESERVATION);
    const [errors, setErrors] = React.useState<ReservationDataErrors>(EMPTY_ERRORS);

    const updateValue = React.useCallback<UpdateFunc>((value, field) => {
        setReservationData(prev => ({...prev, [field]: value}));
        setErrors(prev => ({...prev, [field]: validateField(field, value)}));
    }, []);

    return (
        <ReservationContext.Provider
            value={{
                data: {...reservationData},
                errors: {...errors},
                updateValue
            }}
        >
            { children }
        </ReservationContext.Provider>
    );
};

export const useReservation = () => React.useContext(ReservationContext);