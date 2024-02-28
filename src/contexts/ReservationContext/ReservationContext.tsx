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

export interface ReservationDataErrors {
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
type ValidateFunc = (fields: ReservationField[]) => boolean

interface IReservationContext {
    data: ReservationData
    errors: ReservationDataErrors
    validate: ValidateFunc
    updateValue: UpdateFunc
    currentStep: number
    nextStep: () => void
    prevStep: () => void
    startOver: () => void
}

const ReservationContext = React.createContext<IReservationContext>({
    data: EMPTY_RESERVATION,
    errors: EMPTY_ERRORS,
    validate: () => true,
    updateValue: () => {},
    currentStep: 1,
    nextStep: () => {},
    prevStep: () => {},
    startOver: () => {}
});

export const ReservationContextProvider = ({ children }) => {
    const [reservationData, setReservationData] = React.useState<ReservationData>(EMPTY_RESERVATION);
    const [errors, setErrors] = React.useState<ReservationDataErrors>(EMPTY_ERRORS);
    const [currentStep, setCurrentStep] = React.useState<number>(1);

    const updateValue = React.useCallback<UpdateFunc>((value, field) => {
        setReservationData(prev => ({...prev, [field]: value}));
        setErrors(prev => ({...prev, [field]: validateField(field, value)}));
    }, []);

    const validate = React.useCallback<ValidateFunc>((fields: ReservationField[] = Object.values(ReservationField)) => {
        const tempErr = {...errors}
        fields.forEach(field => {
            tempErr[field] = validateField(field, reservationData[field])
        })

        setErrors(tempErr);
        if (JSON.stringify(tempErr) === JSON.stringify(EMPTY_ERRORS)) return true;
        return false;
    }, [errors, reservationData]);

    return (
        <ReservationContext.Provider
            value={{
                data: {...reservationData},
                errors: {...errors},
                validate,
                updateValue,
                currentStep,
                nextStep: () => setCurrentStep(prev => prev + 1),
                prevStep: () => setCurrentStep(prev => prev - 1),
                startOver: () => setReservationData(EMPTY_RESERVATION)
            }}
        >
            { children }
        </ReservationContext.Provider>
    );
};

export const useReservation = () => React.useContext(ReservationContext);