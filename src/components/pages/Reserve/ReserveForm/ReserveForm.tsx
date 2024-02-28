import React, { useCallback } from 'react';
import { useModal } from '../../../../contexts/ModalContext.tsx';
import { ReservationField, useReservation } from '../../../../contexts/ReservationContext/ReservationContext.tsx';
import Button, { ButtonType } from '../../../business/Button/Button.tsx';
import DateInput from '../../../business/Inputs/DateInput/DateInput.tsx';
import NumberInput from '../../../business/Inputs/NumberInput/NumberInput.tsx';
import SelectInput from '../../../business/Inputs/SelectInput/SelectInput.tsx';
import TextInput from '../../../business/Inputs/TextInput/TextInput.tsx';
import './ReserveForm.css';

const STEP_1_FIELDS: ReservationField[] = [
    ReservationField.CLIENTS_AMMOUNT,
    ReservationField.DATE,
    ReservationField.TIME
];

const STEP_2_FIELDS: ReservationField[] = [
    ReservationField.NAME,
    ReservationField.EMAIL,
    ReservationField.PHONE
];

const ReserveForm: React.FC = () => {
    const { data, errors, updateValue, validate, currentStep, nextStep } = useReservation();
    const { closeModal } = useModal();

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentStep < 3) {
            if (validate(currentStep === 1 ? STEP_1_FIELDS : STEP_2_FIELDS)) {
                nextStep();
            }
        } else {
            closeModal();
        }

    }, [validate, closeModal, currentStep, nextStep]);

    return (
        <form className='reserve-form' onSubmit={onSubmit}>
            <section className={`${currentStep === 2 ? 'step-2' : ''}`}>
                <div>
                    <NumberInput
                        label='How many will you be?*'
                        caption='25 max'
                        value={data[ReservationField.CLIENTS_AMMOUNT]}
                        error={errors[ReservationField.CLIENTS_AMMOUNT]}
                        onChange={value => updateValue(value, ReservationField.CLIENTS_AMMOUNT)}
                    />
                    <DateInput
                        label='Which day?*'
                        value={data[ReservationField.DATE]}
                        error={errors[ReservationField.DATE]}
                        onChange={value => updateValue(value, ReservationField.DATE)}
                    />
                    <SelectInput
                        label='What time?*'
                        value={data[ReservationField.TIME]}
                        error={errors[ReservationField.TIME]}
                        onChange={value => updateValue(value, ReservationField.TIME)}
                    />
                </div>
                <div>
                    <TextInput
                        label='A name.*'
                        caption='Any name'
                        value={data[ReservationField.NAME]}
                        error={errors[ReservationField.NAME]}
                        onChange={value => updateValue(value, ReservationField.NAME)}
                    />
                    <TextInput
                        label='An email so we can notify you.*'
                        caption='example@example.com'
                        value={data[ReservationField.EMAIL]}
                        error={errors[ReservationField.EMAIL]}
                        onChange={value => updateValue(value, ReservationField.EMAIL)}
                    />
                    <TextInput
                        label='A phone number.'
                        caption='+1 123 45 67 89'
                        value={data[ReservationField.PHONE]}
                        error={errors[ReservationField.PHONE]}
                        onChange={value => updateValue(value, ReservationField.PHONE)}
                    />
                </div>
            </section>
            <Button submitForm type={ButtonType.BIG_CTA}>{currentStep === 1 ? 'Next step' : 'Confirm'}</Button>
        </form>
    )
}

export default ReserveForm