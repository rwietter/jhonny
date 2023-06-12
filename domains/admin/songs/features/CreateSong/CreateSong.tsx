import { type FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { songSchema } from 'shared/interfaces/schemas';
import { Button } from 'shared/components';
import { useSongs } from '../../hooks/useSongs';

const songFields = [
  {
    name: 'Nome',
    field: 'name',
    type: 'text',
  },
  {
    name: 'Ano',
    field: 'year',
    type: 'string',
  },
  {
    name: 'Youtube',
    field: 'youtube',
    type: 'text',
  },
  {
    name: 'Spotify',
    field: 'spotify',
    type: 'text',
  }
]

const CreateSong: React.FC = () => {
  const { setSongs } = useSongs()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(songSchema),
  });

  const onSubmit = (data: FieldValues) => {
    void async function () {
      try {
        const response = await fetch('/api/songs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        if (response.ok) {
          setSongs(result)
          reset()
        }

      } catch (error) {
        console.log(error)
      }
    }()
  }

  return (
    <section className="w-full flex pt-8 justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl h-fit bg-white rounded-md shadow-sm p-14"
      >
        <fieldset>
          <legend className="text-center text-xl font-bold">Cadastrar Música</legend>

          {songFields.map((field) => (
            <div key={field.name} className="flex flex-col pt-6">
              <label htmlFor="name">{field.name}</label>
              <input
                type={field.type}
                {...register(field.field)}
                className="border border-slate-300 rounded-md p-2"
              />
            </div>
          ))}
          <Button
            type="submit"
            color="bg-blue-500"
            hoverColor="hover:bg-blue-700"
          >
            Cadastrar
          </Button>
          {errors && <p className="text-red-500">{errors.root?.message}</p>}
        </fieldset>
      </form>
    </section>
  )
}

export { CreateSong };
