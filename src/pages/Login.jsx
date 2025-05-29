import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí lógica de login
    console.log("Login con:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50 p-4">

      <div className="hidden md:flex w-1/2 bg-[url('/images/login-bg.jpg')] bg-cover bg-center" />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-4 text-center">
          Iniciar sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 rounded hover:bg-teal-600 transition"
          >
            Iniciar sesión
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            ¿No tienes una cuenta?{" "}
            <a
              href="/register"
              className="text-teal-600 font-semibold hover:underline"
            >
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
