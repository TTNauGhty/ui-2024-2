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

const Tab2: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedCar, setSelectedCar] = useState<{ name: string; img: string } | null>(null);

  const cars = [
    { name: 'Sedán', price: '$60/día', img: 'resources/Imagenes/Carros/Sedan.jpg' },
    { name: 'SUV', price: '$80/día', img: 'resources/Imagenes/Carros/SUV.jpeg' },
    { name: 'Deportivo', price: '$130/día', img: 'resources/Imagenes/Carros/Deportivo.webp' },
    { name: 'Compacto', price: '$50/día', img: 'resources/Imagenes/Carros/Compacto.webp' },
    { name: 'Convertible', price: '$100/día', img: 'resources/Imagenes/Carros/Convertible.webp' },
    { name: 'Pickup', price: '$95/día', img: 'resources/Imagenes/Carros/Pickup.jpg' },
    { name: 'Crossover', price: '$85/día', img: 'resources/Imagenes/Carros/crossover.jpg' },
    { name: 'Hatchback', price: '$55/día', img: 'resources/Imagenes/Carros/Hatchback.jpg' },
    { name: 'Luxury', price: '$160/día', img: 'resources/Imagenes/Carros/Luxury.webp' },
  ];

  const handleRentClick = (car: { name: string; img: string }) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleSubmitForm = () => {
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
            <IonButton href="Tab2" className="nav-link active">Autos</IonButton>
            <IonButton href="Tab3" className="nav-link">Scooters</IonButton>
            <IonButton href="Contact" className="nav-link">Contacto</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Banner */}
        <section id="inicio" className="banner">
          <img
            src="resources/Imagenes/Carros/Banner2.webp"
            alt="Banner de Autos"
            className="banner-image"
          />
          <div className="banner-text">
            <h2>¡Encuentra el Auto Ideal!</h2>
            <p>Explora nuestra selección de autos y elige el que más se adapte a tus necesidades.</p>
          </div>
        </section>

        {/* Buscador */}
        <IonSearchbar placeholder="Buscar autos..." />

        {/* Catálogo */}
        <section id="autos">
          <IonGrid>
            <IonRow>
              {cars.map((car, index) => (
                <IonCol size="12" size-md="4" key={index}>
                  <IonCard>
                    <div className="card-image">
                      <img src={car.img} alt={car.name} />
                    </div>
                    <IonCardHeader>
                      <IonCardTitle>{car.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Precio: {car.price}</p>
                      <IonButton
                        color="warning"
                        expand="block"
                        onClick={() => handleRentClick(car)}
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
              <IonLabel position="stacked">Nombre del Auto</IonLabel>
              <IonText>{selectedCar?.name}</IonText>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Nombre Completo</IonLabel>
              <IonInput placeholder="Ingrese su nombre" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Número de Celular</IonLabel>
              <IonInput type="tel" placeholder="Ingrese su número de celular" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Correo Electrónico</IonLabel>
              <IonInput type="email" placeholder="Ingrese su correo" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Fecha de Reclamo</IonLabel>
              <IonInput type="date" />
            </IonItem>
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
            <IonImg src={selectedCar?.img} alt={selectedCar?.name} />
            <p>Gracias por alquilar el {selectedCar?.name}.</p>
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

export default Tab2;
