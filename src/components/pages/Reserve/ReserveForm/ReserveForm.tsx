import React, { useCallback } from 'react'
import './ReserveForm.css'
import { ReservationField, useReservation } from '../../../../contexts/ReservationContext/ReservationContext.tsx'
import NumberInput from '../../../business/Inputs/NumberInput/NumberInput.tsx';
import DateInput from '../../../business/Inputs/DateInput/DateInput.tsx';
import SelectInput from '../../../business/Inputs/SelectInput/SelectInput.tsx';
import Button, { ButtonType } from '../../../business/Button/Button.tsx';

const ReserveForm: React.FC = () => {
    const { data, errors, updateValue, validateAll } = useReservation();

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateAll()) {
            console.log('a');
        }
    }, [validateAll]);

    return (
        <form className='reserve-form' onSubmit={onSubmit}>
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
            <Button submitForm type={ButtonType.BIG_CTA}>Next step</Button>
        </form>
    )
}

export default ReserveForm