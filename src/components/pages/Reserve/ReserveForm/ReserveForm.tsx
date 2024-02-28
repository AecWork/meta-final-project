import React, { useCallback, useMemo } from 'react';
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
    const { data, errors, updateValue, validate, currentStep, nextStep, prevStep, startOver } = useReservation();
    const { closeModal } = useModal();

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentStep < 3) {
            if (validate(currentStep === 1 ? STEP_1_FIELDS : STEP_2_FIELDS)) {
                nextStep();
            }
        } else {
            closeModal();
            setTimeout(() => {
                startOver();
                prevStep();
                prevStep();
            }, 1000);
        }

    }, [validate, closeModal, currentStep, nextStep, prevStep, startOver]);

    const buttonText = useMemo(() => {
        switch(currentStep) {
            case 1: return 'Next step';
            case 2: return 'Confirm';
            case 3: return 'Back';
            default: return '';
        }
    }, [currentStep])

    return (
        <form className='reserve-form' onSubmit={onSubmit}>
            <section className={`step-${currentStep}`}>
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
                <div className='last'>
                    <span className='uppercase display'>See you soon</span>
                    <span className='msg text-L'>An email has been sent with all the reservation’s details</span>
                </div>
            </section>
            <Button submitForm type={ButtonType.BIG_CTA}>{buttonText}</Button>
        </form>
    )
}

export default ReserveForm