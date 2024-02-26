import React from "react";

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

const EMPTY_RESERVATION: ReservationData = {
    [ReservationField.CLIENTS_AMMOUNT]: 0,
    [ReservationField.DATE]: '',
    [ReservationField.TIME]: '',
    [ReservationField.NAME]: '',
    [ReservationField.EMAIL]: '',
    [ReservationField.PHONE]: ''
}

type UpdateFunc = (value: number | string, field: ReservationField) => void

interface IReservationContext {
    data: ReservationData
    updateValue: UpdateFunc
}

const ReservationContext = React.createContext<IReservationContext>({
    data: EMPTY_RESERVATION,
    updateValue: () => {}
});

export const ReservationContextProvider = ({ children }) => {
    const [reservationData, setReservationData] = React.useState<ReservationData>(EMPTY_RESERVATION);

    const updateValue = React.useCallback<UpdateFunc>((value, field) => {
        setReservationData(prev => ({...prev, [field]: value}));
    }, []);

    return (
        <ReservationContext.Provider
            value={{
                data: {...reservationData},
                updateValue
            }}
        >
            { children }
        </ReservationContext.Provider>
    );
};

export const useReservation = () => React.useContext(ReservationContext);