import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonFooter,
  IonButtons,
  IonModal,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  IonImg,
} from '@ionic/react';
import './Tab2.css';

const Tab3: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedScooter, setSelectedScooter] = useState<{ name: string; img: string } | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupDate: '',
  });
  const [formError, setFormError] = useState(false);

  const scooters = [
    { name: 'Scooter Urbano', price: '$15/día', img: 'resources/Imagenes/Scooters/Scooter_Urbano.jpg' },
    { name: 'Scooter Eléctrico', price: '$25/día', img: 'resources/Imagenes/Scooters/Scooter_Eléctrico.webp' },
    { name: 'Scooter Clásico', price: '$45/día', img: 'resources/Imagenes/Scooters/Scooter_Clásico.webp' },
    { name: 'Scooter Compacto', price: '$20/día', img: 'resources/Imagenes/Scooters/Scooter_Compacto.webp' },
    { name: 'Scooter Off-Road', price: '$30/día', img: 'resources/Imagenes/Scooters/Scooter_Off-Road.jpg' },
    { name: 'Scooter Versátil', price: '$28/día', img: 'resources/Imagenes/Scooters/Scooter_Versátil.jpg' },
  ];

  const handleRentClick = (scooter: { name: string; img: string }) => {
    setSelectedScooter(scooter);
    setShowForm(true);
    setFormError(false); // Reset error state
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmitForm = () => {
    const { fullName, phone, email, pickupDate } = formData;

    // Check if all fields are filled
    if (!fullName || !phone || !email || !pickupDate) {
      setFormError(true);
      return;
    }

    setShowForm(false);
    setShowThankYou(true);
  };

  return (
    <IonPage>
      {/* Header con Navegación */}
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>AUTOYA</b></IonTitle>
          <IonButtons slot="end">
            <IonButton href="Tab1" className="nav-link">Inicio</IonButton>
            <IonButton href="Tab2" className="nav-link">Autos</IonButton>
            <IonButton href="Tab3" className="nav-link active">Scooters</IonButton>
            <IonButton href="Contact" className="nav-link">Contacto</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Banner */}
        <section id="inicio" className="banner">
          <img
            src="resources/Imagenes/Scooters/Scooter_Banner.jpg"
            alt="Banner de Scooters"
            className="banner-image"
          />
          <div className="banner-text">
            <h2>¡Explora con Scooters!</h2>
            <p>Elige un scooter para moverte de manera rápida y divertida.</p>
          </div>
        </section>

        {/* Buscador */}
        <IonSearchbar placeholder="Buscar scooters..." />

        {/* Catálogo */}
        <section id="scooters">
          <IonGrid>
            <IonRow>
              {scooters.map((scooter, index) => (
                <IonCol size="12" size-md="4" key={index}>
                  <IonCard>
                    <div className="card-image">
                      <img src={scooter.img} alt={scooter.name} />
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>{scooter.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Precio: {scooter.price}</p>
                      <IonButton
                        color="warning"
                        expand="block"
                        onClick={() => handleRentClick(scooter)}
                      >
                        Alquilar
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* Sección de Contacto */}
        <section id="contacto" className="contact">
          <h3>Contáctanos</h3>
          <p>Teléfono: +123 456 789</p>
          <p>Correo: contacto@alquilervehiculos.com</p>
          <div className="map">
            <img src="resources/Imagenes/Mapa.jpg" alt="Mapa de Ubicación" className="map-image" />
            <div className="mapa-text">
              <h2>¡Nuestras tiendas!</h2>
            </div>
          </div>
        </section>
      </IonContent>

      {/* Footer */}
      <IonFooter>
        <IonToolbar>
          <p>© 2024 Alquiler de Vehículos. Todos los derechos reservados.</p>
        </IonToolbar>
      </IonFooter>

      {/* Modal de formulario */}
      <IonModal isOpen={showForm} onDidDismiss={() => setShowForm(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Formulario de Alquiler</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{ padding: '16px' }}>
            <IonItem>
              <IonLabel position="stacked">Nombre del Scooter</IonLabel>
              <IonText>{selectedScooter?.name}</IonText>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Nombre Completo</IonLabel>
              <IonInput
                placeholder="Ingrese su nombre"
                onIonChange={(e) => handleInputChange('fullName', e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Número de Celular</IonLabel>
              <IonInput
                type="tel"
                placeholder="Ingrese su número de celular"
                onIonChange={(e) => handleInputChange('phone', e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Correo Electrónico</IonLabel>
              <IonInput
                type="email"
                placeholder="Ingrese su correo"
                onIonChange={(e) => handleInputChange('email', e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Fecha de Reclamo</IonLabel>
              <IonInput
                type="date"
                onIonChange={(e) => handleInputChange('pickupDate', e.detail.value!)}
              />
            </IonItem>
            {formError && <IonText color="danger">Todos los campos son obligatorios.</IonText>}
            <IonButton expand="block" color="success" onClick={handleSubmitForm}>
              Alquilar
            </IonButton>
          </div>
        </IonContent>
      </IonModal>

      {/* Modal de agradecimiento */}
      <IonModal isOpen={showThankYou} onDidDismiss={() => setShowThankYou(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>¡Gracias por elegirnos!</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-text-center">
            <IonImg src={selectedScooter?.img} alt={selectedScooter?.name} />
            <p>Gracias por alquilar el {selectedScooter?.name}.</p>
            <p>Podrá recogerlo en la fecha seleccionada. ¡Que lo disfrute!</p>
            <IonButton expand="block" onClick={() => setShowThankYou(false)}>
              Cerrar
            </IonButton>
          </IonContent>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Tab3;
