import { AiFillInstagram } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import { BsFacebook, BsSpotify } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

type Author = {
	name: string;
	media: {
		type: string;
		url: string;
		icon: () => JSX.Element;
	}[];
}

export const author: Author = {
	name: 'Jhonny Santanna',
	media: [
		{
			type: 'youtube',
			url: 'https://www.youtube.com/channel/UCxMdacQlobYUegCra2Qi2jw',
			icon: () => <SiYoutubemusic size={28} color="#FFF" />
		},
		{
			type: 'facebook',
			url: 'https://www.facebook.com/jhonnysantannacantor/',
			icon: () => <BsFacebook size={26} color="#FFF" />
		},
		{
			type: 'spotify',
			url: 'https://open.spotify.com/artist/0EUdHJqWfCUhsdCSYYKsP0',
			icon: () => <BsSpotify size={26} color="#FFF" />
		},
		{
			type: 'instagram',
			url: 'https://www.instagram.com/cantorjhonnysantanna/',
			icon: () => <AiFillInstagram size={30} color="#FFF" />
		},
		{
			type: 'whatsapp',
			url: 'https://api.whatsapp.com/send?phone=1111111111&text=Hi',
			icon: () => <IoLogoWhatsapp size={28} color="#FFF" />
		}
	]
};