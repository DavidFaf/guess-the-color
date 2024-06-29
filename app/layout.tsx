import '@styles/globals.css'

import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "GuessTheColor: The best color guessing game",
  description: "Can you beat the highscore ?",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="main">
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout