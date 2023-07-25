import { Button } from 'shared/components/Button';
import React from 'react';
import { AdminLayout } from 'shared/components/Layout';
import { useSongs } from '../songs/hooks/useSongs';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  local: z.string(),
  date: z.string(),
  songs: z.array(z.string()),
});

const Performance = () => {
  const { songs } = useSongs()

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: zodResolver(schema),
    });

  const onSubmit = (data: FieldValues) => {
    void (async function () {
      console.log(data);
      try {
        const response = await fetch("/api/performance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <AdminLayout>
      <section className="w-full flex pt-8 justify-center items-center">
        <form
          className="w-full max-w-xl h-fit bg-white rounded-md shadow-sm p-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="text-center font-bold text-xl">
            Cadastrar Show
          </fieldset>
          <div className="flex flex-col pt-6">
            <label htmlFor="name">Local</label>
            <input
              type="text"
              id="name"
              className="border border-slate-300 rounded-md p-2"
              {...register("local")}
            />
          </div>
          <div className="flex flex-col pt-6">
            <label htmlFor="name">Data</label>
            <input
              type="text"
              id="name"
              className="border border-slate-300 rounded-md p-2"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col pt-6">
            <label htmlFor="name">Playlist</label>
            <div className="mt-1 grid grid-cols-2 gap-2 pl-2 pt-3 sm:grid-cols-1">
              {songs.map((song) => (
                <div key={song.name} className="flex items-center">
                  <input
                    type="checkbox"
                    id={song.id}
                    value={song.id}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    {...register("songs")}
                  />
                  <label
                    htmlFor={song.name}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {song.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Button
            type="submit"
            color="bg-blue-500"
            hoverColor="hover:bg-blue-700"
          >
            Cadastrar
          </Button>
        </form>
      </section>
    </AdminLayout>
  );
}

export { Performance };
