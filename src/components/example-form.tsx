import {IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import React from 'react';
import useForm from "react-hook-form";

const ExampleForm: React.FC = () => {
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        const {email} = data;
        try {
            console.log("SUBMIT");
        } catch (e) {
            console.log(e);
        }
    }

    console.log(watch('email')) // watch input value by passing the name of it
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <IonItem>
                        <IonLabel position="floating">E-mail address</IonLabel>
                        <IonInput
                            type="text"
                            name="email"
                            defaultValue=""
                            ref={register({required: true, pattern: /^\S+@\S+$/i}) as any}
                            autocapitalize="off"
                        >
                        </IonInput>
                    </IonItem>

                <IonButton type="submit" expand="block" color="primary" shape="round"
                           >
                    SUBMIT
                </IonButton>
            </form>
        </>
    );
};

export default ExampleForm;
