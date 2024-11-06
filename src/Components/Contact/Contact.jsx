import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function FormComponent() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black">
      <h2 className='text-3xl mb-10'>Contactate con nosotros</h2>
      <div className="flex flex-col w-full max-w-4xl p-4 bg-black rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna Izquierda */}
          <div>
            <label className="text-white mb-2 block">Nombre</label>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: 'Este campo es requerido.' }}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full mb-4 p-2 rounded text-black bg-white"
                />
              )}
            />
            {errors.firstName && <p className="text-fuxia">{errors.firstName.message}</p>}

            <label className="text-white mb-2 block">Apellido</label>
            <Controller
              control={control}
              name="lastName"
              rules={{ required: 'Este campo es requerido.' }}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full mb-4 p-2 rounded text-black bg-white"
                />
              )}
            />
            {errors.lastName && <p className="text-fuxia">{errors.lastName.message}</p>}

            <label className="text-white mb-2 block">Celular</label>
            <Controller
              control={control}
              name="phone"
              rules={{
                required: 'Este campo es requerido.',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Debe ser un número válido.',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full mb-4 p-2 rounded text-black bg-white"
                />
              )}
            />
            {errors.phone && <p className="text-fuxia">{errors.phone.message}</p>}

            <label className="text-white mb-2 block">Email</label>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Este campo es requerido.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Debe ser un correo electrónico válido.',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full mb-4 p-2 rounded text-black bg-white"
                />
              )}
            />
            {errors.email && <p className="text-fuxia">{errors.email.message}</p>}
          </div>

          {/* Columna Derecha */}
          <div>
            <label className="text-white mb-2 block">Mensaje</label>
            <Controller
              control={control}
              name="message"
              rules={{ required: 'Este campo es requerido.' }}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full p-2 rounded text-black bg-white resize-none"
                  rows="12"  // Ajusta la altura del campo de mensaje
                />
              )}
            />
            {errors.message && <p className="text-fuxia">{errors.message.message}</p>}
          </div>
        </div>

        {/* Botón Enviar */}
        <div className="mt-8">
          <button
            className="w-full py-2 bg-fuxia text-white rounded hover:bg-blue-700"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
