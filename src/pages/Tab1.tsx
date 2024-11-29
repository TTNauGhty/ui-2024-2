import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFooter,
  IonButtons,
  IonButton as NavButton,
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* Header con Navegación */}
      <IonHeader>
        <IonToolbar>
          <IonTitle><b>AUTOYA</b></IonTitle>
          <IonButtons slot="end">
            <NavButton className="nav-link active" href="Tab1">
              Inicio
            </NavButton>
            <NavButton className="nav-link" href="Tab2">
              Autos
            </NavButton>
            <NavButton className="nav-link" href="Tab3">
              Scooters
            </NavButton>
            <NavButton className="nav-link" href="Contact">
              Contacto
            </NavButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Banner */}
        <section id="banner" className="banner">
          <img
            src="resources/Imagenes/Carros/Banner1.webp"
            alt="Banner Principal"
            className="banner-image"
          />
          <div className="banner-text">
            <h2>¡Explora la ciudad con nuestros vehículos!</h2>
            <p>Alquila autos y scooters al instante con las mejores tarifas.</p>
            <IonButton href="#autos" color="light">
              Ver Autos
            </IonButton>
            <IonButton href="#scooters" color="light">
              Ver Scooters
            </IonButton>
          </div>
        </section>

        {/* Modelos de Autos */}
        <section id="autos">
          <h3>Autos Disponibles</h3>
          <IonGrid>
            <IonRow>
              <IonCol size="10" size-md="4">
                <IonCard>
                  <img src="resources/Imagenes/Carros/Sedan.jpg" alt="Sedán" />
                  <IonCardHeader>
                    <IonCardTitle>Sedán</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Desde $60/día</p>
                    <IonButton href="Tab2" color="warning" expand="block">Ver Detalles</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="10" size-md="4">
                <IonCard>
                  <img src="resources/Imagenes/Carros/SUV.jpeg" alt="SUV" />
                  <IonCardHeader>
                    <IonCardTitle>SUV</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Desde $80/día</p>
                    <IonButton href="Tab2" color="warning" expand="block">Ver Detalles</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="10" size-md="4">
                <IonCard>
                  <img src="resources/Imagenes/Carros/Deportivo.webp" alt="Deportivo" />
                  <IonCardHeader>
                    <IonCardTitle>Deportivo</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Desde $130/día</p>
                    <IonButton href="Tab2" color="warning" expand="block">Ver Detalles</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Modelos de Scooters */}
        <section id="scooters">
          <h3>Scooters Disponibles</h3>
          <IonGrid>
            <IonRow>
              <IonCol size="10" size-md="4">
                <IonCard>
                  <img src="resources/Imagenes/Scooters/Scooter_Eléctrico.webp" alt="Scooter Eléctrico" />
                  <IonCardHeader>
                    <IonCardTitle>Scooter Eléctrico</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Desde $25/día</p>
                    <IonButton href="Tab3" color="warning" expand="block">Ver Detalles</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
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
    </IonPage>
  );
};

export default Tab1;
