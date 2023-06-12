import { useRouter } from "next/router"

export const Login = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/admin/music')
  }

  return (
    <form className='w-full max-w-md h-96 bg-white shadow-sm p-4 py-8'>
      <fieldset>
        <legend className='text-center text-2xl font-bold'>Login</legend>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full px-4 mb-4 pt-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='w-full px-4 mb-4 pt-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='w-full px-4 mb-4 pt-6'>
            <button
              className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
