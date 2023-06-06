import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: "Promptisland",
    description: "Find & Share your desired AI Prompts"
}

const Rootlayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient"/>
                </div>
                
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout