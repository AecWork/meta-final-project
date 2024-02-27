import React, { useCallback, useState } from 'react'
import './ReserveForm.css'
import { ReservationField, useReservation } from '../../../../contexts/ReservationContext/ReservationContext.tsx'
import NumberInput from '../../../business/Inputs/NumberInput/NumberInput.tsx';
import DateInput from '../../../business/Inputs/DateInput/DateInput.tsx';
import SelectInput from '../../../business/Inputs/SelectInput/SelectInput.tsx';
import Button, { ButtonType } from '../../../business/Button/Button.tsx';
import TextInput from '../../../business/Inputs/TextInput/TextInput.tsx';
import { useModal } from '../../../../contexts/ModalContext.tsx';
import {ReactComponent as Arrow} from '../../../../assets/icons/arrow.svg';

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
    const { data, errors, updateValue, validate } = useReservation();
    const [step, setStep] = useState<number>(1);
    const { closeModal } = useModal();

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (step < 3) {
            if (validate(step === 1 ? STEP_1_FIELDS : STEP_2_FIELDS)) {
                setStep(prev => prev + 1);
            }
        } else {
            closeModal();
        }

    }, [validate, closeModal, step]);

    const backClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStep(prev => prev - 1);
    }, []);

    return (
        <>
            { step === 2 && (
                <div className='back-button'>
                    <Button type={ButtonType.LINK} onClick={backClick}><><Arrow />Back</></Button>
                </div>
            )}
            <form className='reserve-form' onSubmit={onSubmit}>
                <section className={`${step === 2 ? 'step-2' : ''}`}>
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
                <Button submitForm type={ButtonType.BIG_CTA}>{step === 1 ? 'Next step' : 'Confirm'}</Button>
            </form>
        </>
    )
}

export default ReserveForm