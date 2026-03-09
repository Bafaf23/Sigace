import Input from "../atom/Input";
import Selector from "../atom/Selector";

const HealthPhysicalFields = ({ datos, manejarCambio }) => {
  const typeBoodlSel = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  return (
    <div className="space-y-4">
      <h4 className="border-b pb-2 font-bold text-blue-700">
        Información Médica y Tallas
      </h4>
      <div className="grid grid-cols-2 items-end gap-4">
        <Selector
          id={"bloodType"}
          name={"bloodType"}
          label={"Selecciona tipo de sangre"}
          options={typeBoodlSel}
          value={datos.bloodType}
          onChange={manejarCambio}
        />
        <Input
          name={"allergies"}
          label={"Alegias"}
          placeholder="Alergias (Ninguna si no aplica)"
          onChange={manejarCambio}
          value={datos.allergies}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Input
          name={"shirtSize"}
          label={"Talla de camisa"}
          placeholder="Ej: S,M,XL"
          onChange={manejarCambio}
          value={datos.shirtSize}
        />
        <Input
          name={"pantSize"}
          label={"Talla de pantalon"}
          placeholder="Ej: 34"
          onChange={manejarCambio}
          value={datos.pantSize}
        />
        <Input
          name={"shoeSize"}
          label={"Talla de zapatos"}
          placeholder="Ej: 45"
          onChange={manejarCambio}
          value={datos.shoeSize}
        />
      </div>
      <div className="grid grid-cols-3 place-items-end gap-2">
        <Input
          name={"medicalCondition"}
          label={"¿Tienes alguna enfermedad o condición médica?"}
          placeholder="Ej: Asma"
          onChange={manejarCambio}
          value={datos.medicalCondition}
        />
        <Input
          name={"height"}
          label={"¿Cuanto mides?"}
          placeholder="Ej: 1.34"
          onChange={manejarCambio}
          value={datos.height}
        />
        <Input
          name={"weight"}
          label={"¿Cuanto pesas?"}
          placeholder="Ej: 87"
          onChange={manejarCambio}
          value={datos.weight}
        />
      </div>
    </div>
  );
};

export default HealthPhysicalFields;
