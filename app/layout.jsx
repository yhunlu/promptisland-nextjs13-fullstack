import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
    title: "Promptisland",
    description: "Find & Share your desired AI Prompts"
}

const Rootlayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout