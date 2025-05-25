import type { Metadata } from 'next'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const metadata: Metadata = {
  title: 'Multiverse of Madness'
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
