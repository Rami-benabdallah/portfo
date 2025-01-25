import { Bangers } from 'next/font/google';
import { Mystery_Quest } from 'next/font/google';
import { Londrina_Outline } from 'next/font/google';
import { Luckiest_Guy } from 'next/font/google';
import "./globals.css";

export const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
});

export const mysteryQuest= Mystery_Quest({
  weight: '400',
  subsets: ['latin'],
});

export const londrinaOutline= Londrina_Outline({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
