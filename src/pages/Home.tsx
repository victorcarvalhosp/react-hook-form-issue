import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton} from '@ionic/react';
import React, {useState} from 'react';
import ExampleForm from "../components/example-form";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExampleForm />
          <IonButton onClick={() => setShowModal(true)}>Show hidden form </IonButton>
          {showModal && (
              <ExampleForm />
          )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
