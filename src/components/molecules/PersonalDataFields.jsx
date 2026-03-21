import Input from "../atom/Input";
import Selector from "../atom/Selector";
import ToggleSimple from "../atom/ToggleSimple";
import SelectorInput from "./SelectorInput";

const PersonalDataFields = ({ datos, manejarCambio }) => {
  const dniType = [
    { value: "V-", label: "V" },
    { value: "E-", label: "E" },
    { value: "CI-", label: "CI" },
  ];

  const genderSel = [
    { label: "Femenino", value: "F" },
    { label: "Masculino", value: "M" },
  ];
  const handleToggle = (e) => {
    const { name, checked } = e.target;
    manejarCambio({ target: { name, value: checked } });
  };
  console.log("Estado actual del género:", datos?.gender);
  return (
    <div className="space-y-4">
      <h4 className="border-b pb-2 font-bold text-blue-700">
        Datos Personales
      </h4>
      <div>
        <ToggleSimple
          label={"¿Vienes de otra institución académica?"}
          name={"isNewEntry"}
          value={datos.isNewEntry}
          onChange={handleToggle}
        />
      </div>
      <div className="grid grid-cols-2 items-end gap-4">
        <SelectorInput
          id={"dniType"}
          name={"dniType"}
          nameInput={"dni"}
          placeholder={"323233"}
          label={"Selecciona tipo de documento"}
          options={dniType}
          onChange={manejarCambio}
          valueSel={datos.dniType}
          valueInput={datos.dni}
        />
        <Input
          name={"birthDate"}
          label={"Fecha de nacimiento"}
          placeholder={"23/12/2002"}
          type={"date"}
          onChange={manejarCambio}
          value={datos.birthDate || ""}
        />
      </div>

      <div className="grid grid-cols-3 place-items-end gap-2">
        <Input
          name={"name"}
          label={"Nombre"}
          placeholder={"Juan"}
          onChange={manejarCambio}
          value={datos?.name}
        />
        <Input
          name={"lastName"}
          label={"Apellido"}
          placeholder={"Fernandez"}
          onChange={manejarCambio}
          value={datos?.lastName}
        />
        <Selector
          name={"gender"}
          label={"Género / Sexo"}
          options={genderSel}
          onChange={manejarCambio}
          value={datos?.gender}
        />
      </div>
      <div className="grid grid-cols-2 place-items-end gap-2">
        <Input
          name={"email"}
          label={"Correo"}
          placeholder={"ejemplo@correo.com"}
          onChange={manejarCambio}
          value={datos?.email}
        />
        <Input
          name={"phone"}
          label={"Numero de telefono"}
          placeholder={"0424XXXX"}
          onChange={manejarCambio}
          value={datos?.phone}
        />
      </div>
    </div>
  );
};

export default PersonalDataFields;
