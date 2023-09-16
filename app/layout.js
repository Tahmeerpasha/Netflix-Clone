import './globals.css'

export const metadata = {
  title: 'Netflix',
  description: 'A netflix clone developed by Tahmeer Pasha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
