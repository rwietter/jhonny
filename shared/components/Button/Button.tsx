import { FC, ReactNode } from 'react';

interface Props {
  type: 'submit' | 'button';
  children: ReactNode | string;
  color: 'bg-blue-500' | 'bg-red-500' | 'bg-green-500';
  hoverColor: 'hover:bg-blue-700' | 'hover:bg-red-700' | 'hover:bg-green-700';
}
const Button: FC<Props> = (props) => {
  return (
    <div className='pt-8'>
      <button
        className={`w-full ${props.color} ${props.hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        type={props.type}
      >
        {props.children}
      </button>
    </div>
  )
}

export { Button };
