import Link from "next/link";
export default function Polity({ onChange, accepted }) {
  return (
    <div className="mt-4 flex items-start gap-3">
      <input
        type="checkbox"
        id="terms"
        onChange={onChange}
        checked={accepted}
        required
        className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor="terms" className="text-sm text-gray-600">
        Acepto los{" "}
        <Link
          href="/legal"
          target="_blank"
          className="text-indigo-600 underline hover:text-indigo-700"
        >
          Términos y Condiciones
        </Link>{" "}
        y la Política de Privacidad de SIGACE.
      </label>
    </div>
  );
}
