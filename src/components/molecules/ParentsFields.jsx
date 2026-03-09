import Input from "../atom/Input";

const ParentsFields = ({ datos, manejarCambio }) => {
  return (
    <div className="space-y-6">
      <h4 className="border-b pb-2 font-bold text-blue-700">
        Datos de los Padres
      </h4>

      {/* Sección Madre */}
      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
        <h5 className="text-sm font-bold text-slate-400 uppercase">
          Datos de la Madre
        </h5>
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="motherName"
            label="Nombre"
            value={datos.motherName}
            onChange={manejarCambio}
          />
          <Input
            name="motherDni"
            label="Cédula"
            value={datos.motherDni}
            onChange={manejarCambio}
          />
          <Input
            name="motherEmail"
            label="Correo"
            value={datos.motherEmail}
            onChange={manejarCambio}
          />
          <Input
            name="motherPhone"
            label="Numero de telefono"
            value={datos.motherPhone}
            onChange={manejarCambio}
          />
        </div>
      </div>

      {/* Sección Padre */}
      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
        <h5 className="text-sm font-bold text-slate-600 uppercase">
          Datos del Padre
        </h5>
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="fatherName"
            label="Nombres"
            value={datos.fatherName}
            onChange={manejarCambio}
          />
          <Input
            name="fatherDni"
            label="Cédula"
            value={datos.fatherDni}
            onChange={manejarCambio}
          />
          <Input
            name="fatherEmail"
            label="Correo"
            value={datos.fatherEmail}
            onChange={manejarCambio}
          />
          <Input
            name="fatherPhone"
            label="Numero de telefono"
            value={datos.fatherPhone}
            onChange={manejarCambio}
          />
        </div>
      </div>
    </div>
  );
};

export default ParentsFields;
