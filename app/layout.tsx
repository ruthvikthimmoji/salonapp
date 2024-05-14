export const metadata = {
  title: 'Salon.app',
  description: 'created by ruthvik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
