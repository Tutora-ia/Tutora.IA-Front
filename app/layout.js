import styles from './globals.css';
import { exo } from './components/fonts';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


export const metadata = {
  title: 'Tutora.IA',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={exo.className}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  )
}
