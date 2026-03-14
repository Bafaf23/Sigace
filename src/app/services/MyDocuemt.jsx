import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// 1. Estilos con ADN SIGACE (Minimalista y Moderno)
const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    color: "#334155", // Slate 700
  },

  watermarkContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1, // Se asegura de estar detrás del texto
  },
  watermarkText: {
    fontSize: 60,
    color: "#E2E8F0", // Un gris muy claro (Slate-200)
    opacity: 0.4,
    transform: "rotate(-45deg)", // Rotación clásica diagonal
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  watermarkImage: {
    width: 300,
    opacity: 0.05, // Muy sutil para que no moleste al leer
  },

  // Barra lateral decorativa o acento superior
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 8,
    backgroundColor: "#1E293B", // Dark Blue SIGACE
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  institutionInfo: {
    flexDirection: "column",
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    letterSpacing: 1,
  },
  badge: {
    backgroundColor: "#F1F5F9",
    padding: "4 8",
    borderRadius: 4,
    fontSize: 8,
    color: "#64748B",
    marginTop: 5,
    alignSelf: "flex-start",
  },
  // Secciones Estilizadas
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingBottom: 5,
  },
  sectionNumber: {
    backgroundColor: "#1E293B",
    color: "#FFF",
    width: 18,
    height: 18,
    borderRadius: 9,
    fontSize: 9,
    textAlign: "center",
    marginRight: 8,
    paddingTop: 3,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1E293B",
    textTransform: "uppercase",
  },
  // Grid de Datos
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  inputGroup: {
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    fontSize: 8,
    color: "#94A3B8",
    marginBottom: 4,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  valueBox: {
    fontSize: 10,
    color: "#1E293B",
    padding: "6 0",
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E1",
    minWidth: 100,
  },
  // Footer / Firmas
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  signatureLine: {
    width: "40%",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    textAlign: "center",
    paddingTop: 8,
  },
  signatureText: {
    fontSize: 8,
    color: "#64748B",
  },
});

const datos = {
  estudiante: {
    cedula: "V-30021867",
    sexo: "Masculino", // Femenino o Masculino
    nombreCompleto: "Bryant Facenda",
    nacionalidad: "Venezolana",
    fechaNacimiento: "23/09/2023",
    edad: "23",
    correo: "bryantffacen@gmail.com",
    paisNacimiento: "Espana",
    estadoNacimiento: "Malaga",
    phone: "04241736193",
    domicilio: {
      estado: "Miranda",
      municipio: "El Hatillo",
      parroquia: "El Hatillo",
      calle: "El arroyo",
      direccion: "Bulervad el arroyo, casa milgros del carmen",
      viviendaCondicion: "Familiar", // Propia, Alquilada, etc.
    },
    datosMedicos: {
      enfermedad: "N/A",
      alergia: false,
      tipoSangre: "A+",
      estatura: "1.80cm",
      peso: "80kg",
    },
  },
  madre: {
    nombre: "Darling Flores",
    cedula: "V-18587434",
    telefono: "04241746193",
  },
  padre: {
    nombre: "Jorge Facenda",
    cedula: "V-17222510",
    telefono: "213213213",
  },
  representante: {
    nombre: "Darling Flores",
    cedula: "V-18587434",
    parentesco: "Madre",
    phone: "04241736183",
    dercction: "Calle el cabiar",
  },
  academico: {
    anioSeccion: "C",
    repite: false,
    materiaPendiente: "0",
  },
};

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.watermarkContainer} fixed>
        <Image src="/logoLiceo.png" style={styles.watermarkImage} />
      </View>
      <View style={styles.accentBar} />

      {/* HEADER ESTILO DASHBOARD */}
      <View style={styles.header}>
        <View style={styles.institutionInfo}>
          <Text style={{ fontSize: 9, color: "#64748B" }}>
            República Bolivariana de Venezuela
          </Text>
          <Text style={styles.mainTitle}>
            {"Escuale selecionada en la inscripcion"}
          </Text>
          <View style={styles.badge}>
            <Text>SISTEMA SIGACE • ID: {data?.id || "2026-X"}</Text>
          </View>
        </View>
        <View style={{ textAlign: "right" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#1E293B" }}>
            PLANILLA DE
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#3B82F6" }}>
            INSCRIPCIÓN
          </Text>
        </View>
      </View>

      {/* SECCIÓN 1: ESTUDIANTE */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionNumber}>
            <Text>1</Text>
          </View>
          <Text style={styles.sectionTitle}>Información del Estudiante</Text>
        </View>

        <View style={styles.grid}>
          <View style={[styles.inputGroup, { width: "50%" }]}>
            <Text style={styles.label}>Nombres y Apellidos</Text>
            <Text style={styles.valueBox}>
              {datos.estudiante.nombreCompleto.toUpperCase() ||
                "Cargar desde SIGACE..."}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "20%" }]}>
            <Text style={styles.label}>Identificación</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.cedula || "V-00000000"}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "20%" }]}>
            <Text style={styles.label}>Sexo</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.sexo.toUpperCase()}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Nacionalidad</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.nacionalidad.toUpperCase()}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Estado de Nacimiento</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.estadoNacimiento.toUpperCase()}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Parroquia</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.domicilio.parroquia}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.fechaNacimiento}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Alguna enfermedad</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.datosMedicos.enfermedad}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Correo</Text>
            <Text style={styles.valueBox}>
              {datos?.estudiante.correo.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>

      {/* SECCIÓN 2: REPRESENTANTE */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionNumber}>
            <Text>2</Text>
          </View>
          <Text style={styles.sectionTitle}>Representante Legal</Text>
        </View>

        <View style={styles.grid}>
          <View style={[styles.inputGroup, { width: "60%" }]}>
            <Text style={styles.label}>Nombre del Responsable</Text>
            <Text style={styles.valueBox}>
              {datos.representante.nombre.toUpperCase()}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Identificacion</Text>
            <Text style={styles.valueBox}>{datos.representante.cedula}</Text>
          </View>
          <View style={[styles.inputGroup, { width: "20%" }]}>
            <Text style={styles.label}>Parentesco</Text>
            <Text style={styles.valueBox}>
              {datos.representante.parentesco.toUpperCase()}
            </Text>
          </View>
          <View style={[styles.inputGroup, { width: "30%" }]}>
            <Text style={styles.label}>Teléfono</Text>
            <Text style={styles.valueBox}>{datos.representante.phone}</Text>
          </View>
          <View style={[styles.inputGroup, { width: "36%" }]}>
            <Text style={styles.label}>Direccion de Domicilio</Text>
            <Text style={styles.valueBox}>
              {datos.representante.dercction.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>

      {/* PIE DE PÁGINA / FIRMAS */}
      <View style={styles.footer}>
        <View style={styles.signatureLine}>
          <Text style={styles.signatureText}>Firma del Estudiante</Text>
        </View>
        <View style={styles.signatureLine}>
          <Text style={styles.signatureText}>Firma Autorizada SIGACE</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 7,
          color: "#94A3B8",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Fecha de Inscripcion: {"12/01/2030"}
      </Text>
      <Text
        style={{
          fontSize: 7,
          color: "#94A3B8",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Documento generado digitalmente por el Sistema de Gestión Académica
        SIGACE. Verifique la autenticidad mediante el código QR institucional.
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
