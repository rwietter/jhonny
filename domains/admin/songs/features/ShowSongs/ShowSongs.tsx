import { Eraser, TrashSimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import { useSongs } from '../../hooks/useSongs';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ShowSongs = () => {
  const { data, error, isLoading } = useSWR('/api/songs', fetcher)
  const { setSongs, songs } = useSongs()

  useEffect(() => { if (data) setSongs(data) }, [data])

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar</div>


  const handleDeleteSong = async (id: string) => {
    try {
      const response = await fetch(`/api/songs/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (response.ok) {
        setSongs(result)
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='w-full flex  flex-col pt-8 justify-start items-center'>
      <h1 className='text-center text-2xl font-bold'>Lista de Músicas</h1>

      <ul className='pt-4'>
        {songs?.map((song: any) => (
          <li key={song.name} className='flex justify-between items-center w-full'>
            <a
              href={song.youtube}
              key={song.name}
              className='text-blue-500 hover:text-blue-800 text-lg'
              target='_blank'
              rel='noreferrer'
            >
              {song.name}
            </a>
            <div className='pl-5'>
              <button className='text-lg' type="button" onClick={() => handleDeleteSong(song.id)}>
                <TrashSimple size={20} className='fill-red-500 hover:fill-red-700 transition-colors' />
              </button>
              <button className='pl-4 text-lg' type="button">
                <Eraser size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export { ShowSongs };
