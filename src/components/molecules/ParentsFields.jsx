import Icon from "../atom/Icon";
import Input from "../atom/Input";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * Page de fromulario de inscripcion de estudiantes.
 * Furmulario de datos del los padres del estudiante.
 *
 * @componet
 * @param {object} props
 * @param {object} props.datos - Objeto de datos para la inscripcion de estudiante.
 * @param {Event} props.manejarCambio - Guarda los datos recopilados desde los formularios.
 * @returns {JSX.Element}
 */

const ParentsFields = ({ datos, manejarCambio }) => {
  return (
    <div className="space-y-6">
      <h4 className="border-b pb-2 font-bold text-blue-700">
        Datos de los Padres
      </h4>
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div>
          <Icon icon={faInfoCircle} className="text-xl text-amber-600" />
        </div>
        <p className="text-md text-amber-600">
          Si no tienes datos de los padres, puedes dejar los campos vacíos y
          continuar con el formulario.
        </p>
      </div>

      {/* Sección Madre */}
      <div className="space-y-4 rounded-xl border border-slate-200 p-4">
        <h5 className="text-sm font-bold text-indigo-500 uppercase">
          Datos de la Madre
        </h5>
        <div className="grid grid-cols-3 gap-4">
          <Input
            name="motherDni"
            placeholder="V-1234567"
            label="Cédula"
            value={datos.motherDni}
            onChange={manejarCambio}
          />

          <Input
            name="motherName"
            placeholder="Carlar Salazar"
            label="Nombre"
            value={datos.motherName}
            onChange={manejarCambio}
          />

          <Input
            name="motherPhone"
            placeholder="0424XXXXX"
            label="Numero de telefono"
            value={datos.motherPhone}
            onChange={manejarCambio}
          />
        </div>
      </div>

      {/* Sección Padre */}
      <div className="space-y-4 rounded-xl border border-slate-200 p-4">
        <h5 className="text-sm font-bold text-indigo-500 uppercase">
          Datos del Padre
        </h5>
        <div className="grid grid-cols-3 gap-4">
          <Input
            name="fatherDni"
            placeholder="V-1234567"
            label="Cédula"
            value={datos.fatherDni}
            onChange={manejarCambio}
          />
          <Input
            name="fatherName"
            placeholder="Juan Ramirez"
            label="Nombres"
            value={datos.fatherName}
            onChange={manejarCambio}
          />

          <Input
            name="fatherPhone"
            placeholder="0424XXXXX"
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
