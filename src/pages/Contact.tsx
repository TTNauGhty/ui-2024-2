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
    IonFooter,
    IonButtons,
    IonButton as NavButton,
    IonIcon,
  } from '@ionic/react';
  import { callOutline, mailOutline, locationOutline } from 'ionicons/icons';
  import './Contact.css';
  
  const Contact: React.FC = () => {
    return (
      <IonPage>
        {/* Header con Navegación */}
        <IonHeader>
          <IonToolbar>
            <IonTitle><b>AUTOYA</b></IonTitle>
            <IonButtons slot="end">
              <NavButton className="nav-link" href="Tab1">
                Inicio
              </NavButton>
              <NavButton className="nav-link" href="Tab2">
                Autos
              </NavButton>
              <NavButton className="nav-link" href="Tab3">
                Scooters
              </NavButton>
              <NavButton className="nav-link active" href="Contact">
                Contacto
              </NavButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          {/* Sección de Título */}
          <section className="contact-header">
            <h2>Contáctanos</h2>
            <p>Estamos aquí para ayudarte con lo que necesites.</p>
          </section>
  
          {/* Información de Contacto */}
          <section className="contact-info">
            <IonGrid>
              <IonRow>
                <IonCol size="12" size-md="4" className="contact-card">
                  <IonIcon icon={callOutline} className="contact-icon" />
                  <h3>Teléfono</h3>
                  <p>+315 273 8723</p>
                </IonCol>
                <IonCol size="12" size-md="4" className="contact-card">
                  <IonIcon icon={mailOutline} className="contact-icon" />
                  <h3>Correo Electrónico</h3>
                  <p>contacto@autoya.com</p>
                </IonCol>
                <IonCol size="12" size-md="4" className="contact-card">
                  <IonIcon icon={locationOutline} className="contact-icon" />
                  <h3>Ubicación</h3>
                  <p>Calle 100 #119, Bogotá, Colombia</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </section>
  
          {/* Formulario de Contacto */}
          <section className="contact-form">
            <h3>Envíanos un Mensaje</h3>
            <form>
              <IonGrid>
                <IonRow>
                  <IonCol size="12" size-md="6">
                    <input type="text" placeholder="Nombre Completo" required />
                  </IonCol>
                  <IonCol size="12" size-md="6">
                    <input type="email" placeholder="Correo Electrónico" required />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonButton type="submit" color="warning" expand="block">
                      Enviar Mensaje
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </form>
          </section>
  
          {/* Mapa */}
          <section className="contact-map">
            <h3>Nuestras Tiendas</h3>
            <div className="map-container">
              <img
                src="resources/Imagenes/Mapa.jpg"
                alt="Mapa de Ubicación"
                className="map-image"
              />
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
  
  export default Contact;
  