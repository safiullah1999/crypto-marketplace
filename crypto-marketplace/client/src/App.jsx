import { Navbar, Footer, Transactions, Loader, Services, Welcome } from "./components";

const App = () => {
  return (
    //div with specific width.
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App
