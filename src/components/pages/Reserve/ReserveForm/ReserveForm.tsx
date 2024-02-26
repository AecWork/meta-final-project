import React from 'react'
import './ReserveForm.css'
import { ReservationField, useReservation } from '../../../../contexts/ReservationContext.tsx'
import NumberInput from '../../../business/Inputs/NumberInput/NumberInput.tsx';

const ReserveForm: React.FC = () => {
    const { data, updateValue } = useReservation();

    return (
        <form>
            <NumberInput
                label='How many will you be?'
                value={data[ReservationField.CLIENTS_AMMOUNT]}
                onChange={value => updateValue(value, ReservationField.CLIENTS_AMMOUNT)}
            />
        </form>
    )
}

export default ReserveForm