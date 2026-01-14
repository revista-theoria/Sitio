import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Revista Theoria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sitio oficial de la revista Theoria" />
      </head>
      <body>
        <Encabezado />

        {children}

        <Footer />
      </body>
    </html>
  );
}
