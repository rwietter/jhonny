import { AdminLayout } from 'shared/components/Layout';
import { CreateSong } from './features/CreateSong';
import { ShowSongs } from './features/ShowSongs';

const Songs = () => {

  return (
    <AdminLayout>
      <CreateSong />
      <ShowSongs />
    </AdminLayout>
  )
}

export { Songs };
