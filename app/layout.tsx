import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Akili — a softer place to land', description: 'A school wellbeing space for reflection, support and small steps forward.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
