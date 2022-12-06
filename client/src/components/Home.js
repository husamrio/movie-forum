import React from 'react'
import Navbar from './Navbar'
import Movielist from "./Movielist";
import Footer from "./Footer";

function Home() {
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <div>
        <Navbar />
        <Movielist />
        <Footer />
    </div>
  )
}

export default Home