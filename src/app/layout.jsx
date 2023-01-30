import Headerbar from './components/Headerbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Portfolio</title>
      </head>
      <body>
        <Headerbar />
        <main className='principal_layout'>
          {children}
        </main>
      </body>
    </html>
  )
}
