import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AfterCard } from '../afterCard/AfterCard';
import { AfterInput } from '../afterInput/AfterInput';
import { AfterCheckbox } from '../afterCheckbox/AfterCheckbox';
import { AfterButton } from '../afterButton/AfterButton';

import InterestsBadminton from "@/app/assets/icons/interestsBadminton";
import InterestsBetting from "@/app/assets/icons/interestsBetting";
import InterestsCoding from "@/app/assets/icons/interestsCoding";
import InterestsFootball from "@/app/assets/icons/interestsFootball";
import InterestsGym from "@/app/assets/icons/interestsGym";

/** Primary UI component for user interaction */
export const AfterForm = ({ ...props }) => {


    return (
        <div
            className="relative grid h-[1200px] w-[800px] place-items-center bg-chill overflow-hidden"
        >
            <AfterCard padding="p-4" rounded="rounded-2xl" mode="mainMatchCard">
                <div className='w-[460px] h-[650px]'>
                    <MultiStepForm />
                </div>
            </AfterCard>
        </div>
    );
};


// Step 1: User Details
const Step1 = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div>
            <div className='flex flex-col gap-2 h-28'>
                <span
                    className='font-bold text-4xl leading-7 text-gray-900'>
                    Create an account
                </span>
                <p className='text-gray-500'>
                    Join our community and start connecting with others!
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <AfterInput register={register} validationRules={{ required: 'Email is required' }} name='email' label='Email' type='email' placeholder='Please enter your Email' />
                {errors.email && <span>Email is required</span>}
                <AfterInput register={register} validationRules={{ required: 'Password is required' }} name='password' label='Password' type='password' placeholder='Please enter your Password' />
                {errors.password && <span>Password is required</span>}
                <AfterInput register={register} validationRules={{ required: 'Confirm Password is required' }} name='confirmPassword' label='Confirm password' type='password' placeholder='Please enter your Password again' />
                {errors.confirmPassword && <span>Confirm Password is required</span>}
                <div className='mt-10'>
                    <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='termsOfUse' size='h-6 w-6' type='checkbox' label="By checking the box, you agree to our Condition of use and Data Protection & Cookies." />
                    {errors.termsOfUse && <span>Checking terms of use is required</span>}
                </div>
            </div>
        </div>
    );
};

// Step 2: Address Details
const Step2 = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div>
            <div className='flex flex-col gap-2 h-28'>
                <span
                    className='font-bold text-4xl leading-7 text-gray-900'>
                    Tell Us About Yourself
                </span>
                <p className='text-gray-500'>
                    Help us get to know you better!
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <AfterInput register={register} validationRules={{ required: 'Name is required' }} name='name' label='Name' type='text' placeholder='Please enter your Name' />
                {errors.name && <span>Name is required</span>}
                <AfterInput register={register} validationRules={{ required: 'Birthday is required' }} name='birthday' label='Birthday' type='date' placeholder='Please enter your Birthday' />
                {errors.birthday && <span>Birthday is required</span>}
                <AfterInput register={register} validationRules={{ required: 'Gender is required' }} name='gender' label='Gender' type='text' placeholder='Please enter your Gender' />
                {errors.gender && <span>Gender is required</span>}
                <AfterInput register={register} validationRules={{ required: 'Height is required' }} name='height' label='Height' type='text' placeholder='Please enter your Gender' />
                {errors.height && <span>Height is required</span>}
            </div>
        </div>
    );
};

// Step 2: Address Details
const Step3 = () => {
    const { register, formState: { errors } } = useFormContext();
    console.log(errors)
    return (
        <div>
            <div className='flex flex-col gap-2 h-28'>
                <span
                    className='font-bold text-4xl leading-7 text-gray-900'>
                    Profile Preferences
                </span>
                <p className='text-gray-500'>
                    Help Us Find Out What You Are Looking For
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <span>
                        What Bring You Here?
                    </span>
                    <div className='flex flex-col gap-4 ml-8'>
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='dates' size='h-6 w-6' type='checkbox' label="Looking for a date" />
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='friends' size='h-6 w-6' type='checkbox' label="Looking for a friend" />
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='network' size='h-6 w-6' type='checkbox' label="Looking to grow my network" />
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='discover' size='h-6 w-6' type='checkbox' label="No reason" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <span>
                        Who Would You Like To Meet?
                    </span>
                    <div className='flex flex-col gap-4 ml-8'>
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='interestedMen' size='h-6 w-6' type='checkbox' label="Men" />
                        <AfterCheckbox register={register} validationRules={{ required: 'Checking terms of use is required' }} name='interestedWomen' size='h-6 w-6' type='checkbox' label="Women" />
                        {errors && errors[""] && <p>{errors[""].message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Step 4: Address Details
const Step4 = () => {
    const { register, formState: { errors } } = useFormContext();
    const [selectedInterests, setSelectedInterests] = useState([]);

    let suggestedInterests = [
        {
            value: 'Coding',
            icon: InterestsCoding,
        },
        {
            value: 'Gym',
            icon: InterestsGym,
        },
        {
            value: 'Football',
            icon: InterestsFootball,
        },
        {
            value: 'Badminton',
            icon: InterestsBadminton,
        },
        {
            value: 'Betting',
            icon: InterestsBetting,
        },
    ];

    const handleInterestClick = (interest) => {
      if (!selectedInterests.includes(interest)) {
        setSelectedInterests((prev) => [...prev, interest]);
      }
    };
    return (
        <div>
            <div className='flex flex-col gap-2 h-28'>
                <span
                    className='font-bold text-4xl leading-7 text-gray-900'>
                    My Interests
                </span>
                <p className='text-gray-500'>
                    Please select the most suitable one's for you
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <ul className='flex flex-wrap gap-2 p-1'>
                    {suggestedInterests.map((item) => (
                        <li
                            key={item.name}
                            className={`flex items-center justify-center gap-2 bg-verified border-2 border-dark rounded-full px-3 py-1.5 text-sm transition-all duration-100 ease-in-out transform cursor-pointer`}
                            onClick={() => handleInterestClick(item.value)}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.value}
                        </li>
                    ))}
                </ul>
                <input type="hidden" {...register('interests')} value={JSON.stringify(selectedInterests)} />
                {errors.interests && <span>{errors.interests.message}</span>}
            </div>
        </div>
    );
};

// Step 5: Review and Submit
const Step5 = () => {
    const { getValues, handleSubmit } = useFormContext();
    const values = getValues();

    const onSubmit = (data) => {
        // This will be the final submit logic
        console.log("Final form submission:", data);
    };

    return (
        <div>
            <AfterButton
                label="Create account"
                mode="love"
                type="submit"
                onClick={handleSubmit(onSubmit)}
            />
            <h2>Review Your Details</h2>
            <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
    );
};

// Main Multi-Step Form Component
const MultiStepForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const defaultValues = {
        email: '',
        password: '',
        confirmPassword: '',
        termsOfUse: '',
        name: '',
        birthday: '',
        gender: '',
        height: '',
        dates: false,
        friends: false,
        network: false,
        discover: false,
        interestedAll: false,
        interestedMen: false,
        interestedWomen: false,
    };

    const validationSchema = [
        //validation for step1
        yup.object({
            email: yup.string().email().required(),
            password: yup.string().required(),
            confirmPassword: yup.string().required(),
            termsOfUse: yup.boolean().oneOf([true]).required(),
        }),
        //validation for step2
        yup.object({
            name: yup.string().required(),
            birthday: yup.date().required(),
            gender: yup.string().required(),
            height: yup.number().required(),
        }),
        //validation for step3
        yup.object({
            dates: yup.boolean().oneOf([true, false]).required(),
            friends: yup.boolean().oneOf([true, false]).required(),
            network: yup.boolean().oneOf([true, false]).required(),
            discover: yup.boolean().oneOf([true, false]).required(),
            interestedMen: yup.boolean().oneOf([true, false]).required(),
            interestedWomen: yup.boolean().oneOf([true, false]).required(),
        }).test('at-least-one', 'At least one of the interest options must be selected', (value) => {
            return value.interestedMen || value.interestedWomen;
        }),

        //validation for step4
        yup.object({
            interests: yup.array()
                .of(yup.string().required()) // Assuming interests are strings
                .min(5, 'You must select at least 5 interests.')
                .required('Interests are required.'),
        }),

        yup.object(),
    ];

    const currentValidationSchema = validationSchema[activeStep];

    const methods = useForm({
        shouldUnregister: false,
        defaultValues,
        resolver: yupResolver(currentValidationSchema),
        mode: "onChange"
    });

    const { handleSubmit, reset, trigger, getValues } = methods;

    const handleNext = async (event) => {
        const values = getValues();
        console.log(values);
        event.preventDefault();

        const isStepValid = await trigger();
        if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = (event) => {
        event.preventDefault();
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = (event) => {
        event.preventDefault();
        setActiveStep(0);
        reset();
    };

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data));
        handleNext();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='h-full'>
                <div className='h-full flex flex-col justify-between'>
                    {activeStep === 0 && <Step1 />}
                    {activeStep === 1 && <Step2 />}
                    {activeStep === 2 && <Step3 />}
                    {activeStep === 3 && <Step4 />}
                    {activeStep === 3 && <Step5 />}
                    {/* <AfterButton
                        label="Reset"
                        mode="menu"
                        onClick={handleReset}
                        type="button"
                    /> */}
                    <div
                        className='flex justify-center'
                    >
                        <AfterButton
                            label="Back"
                            mode="action"
                            onClick={handleBack}
                        />
                        {activeStep != 4 && (
                            <AfterButton
                                label="Next"
                                mode="love"
                                onClick={handleNext}
                            />
                        )}
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

AfterForm.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    rounded: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,

    onClick: PropTypes.func,
};

AfterForm.defaultProps = {
    mode: 'back',
    rounded: false,
    label: 'this is a label',
    placeholder: 'placeholder',
    type: 'text',
    onChange: undefined,

    onClick: undefined,
};
