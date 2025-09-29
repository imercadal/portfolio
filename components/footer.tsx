import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';
import { MdEmail } from 'react-icons/md';


const MyIcon: IconType = MdEmail;
type Item = {
  icon: IconType;
};

const navigation = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/imercadal/',
      icon: () => (
        <Image 
            src='/30_instagram-icon.webp'
            alt='Instagram Logo'
            width={20}
            height={20}
        />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/irene-mercadal/',
      icon: () => (
        <Image 
            src='/31_linkedin-logo.webp'
            alt='LinkedIn Logo'
            width={30}
            height={30}
        />
      ),
    },
    {
      name: 'Email',
      href: 'mailto:irenemercadal@duck.com',
      icon: () => (
        <MyIcon size={25}/>
      ),
    },
  ]


export default function Footer({ item }: { item: Item }) {
  const Icon = item.icon;

  return(
    <footer>
        <div className="md:h-16 h-24 mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-around lg:px-20">
            <div className="flex justify-center items-center gap-x-6 md:order-2">
                {navigation.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="dark hover:text-accent"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                    <span className="sr-only">{item.name}</span>
                    <Icon aria-hidden="true" className="w-6 h-6" />
                    </a>
                ))}
            </div>
            <p className="mt-2 text-center text-xs/6 text-dark md:order-1 md:mt-0">
                &copy; 2025 Developed by Irene Mercadal Albornoz.
            </p>
        </div>
    </footer>

  )
}