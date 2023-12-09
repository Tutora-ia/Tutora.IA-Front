import styles from '../globals.css';
import Header from '../components/header.component/header.jsx';
import Footer from '../components/footer.component/footer.jsx';

export const metadata = {
  title: 'Tutora.IA',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
    return (
    <html lang="pt-br">
      <body>
        <Header /> 
          {children}
        <Footer />
      </body>
    </html>
  )
}
