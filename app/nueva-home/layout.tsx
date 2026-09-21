import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nueva Home (Prueba)',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NuevaHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
