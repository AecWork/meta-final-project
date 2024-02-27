import React from 'react'
import './ReserveForm.css'
import { ReservationField, useReservation } from '../../../../contexts/ReservationContext/ReservationContext.tsx'
import NumberInput from '../../../business/Inputs/NumberInput/NumberInput.tsx';
import DateInput from '../../../business/Inputs/DateInput/DateInput.tsx';
import SelectInput from '../../../business/Inputs/SelectInput/SelectInput.tsx';

const ReserveForm: React.FC = () => {
    const { data, errors, updateValue } = useReservation();

    return (
        <form className='reserve-form'>
            <NumberInput
                label='How many will you be?'
                caption='25 max'
                value={data[ReservationField.CLIENTS_AMMOUNT]}
                error={errors[ReservationField.CLIENTS_AMMOUNT]}
                onChange={value => updateValue(value, ReservationField.CLIENTS_AMMOUNT)}
            />
            <DateInput
                label='Which day?'
                caption='dd/mm/yyyy'
                value={data[ReservationField.DATE]}
                error={errors[ReservationField.DATE]}
                onChange={value => updateValue(value, ReservationField.DATE)}
            />
            <SelectInput
                label='What time?'
                value={data[ReservationField.TIME]}
                error={errors[ReservationField.TIME]}
                onChange={value => updateValue(value, ReservationField.TIME)}
            />
        </form>
    )
}

export default ReserveForm