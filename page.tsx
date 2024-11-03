import Head from "next/head";
import Link from "next/link";

export default function Home(){
  return(
    <div className="container">
      <Head>
        <title>Iphone 14 Pro</title>
        <meta name="description" content="Iphone 14 Pro Landing Page"></meta>
      </Head>

      <header className="navbar">
        <div className="logo">cyber</div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </nav>

        <div className="icons">
          <a href="#"> <img src="https://th.bing.com/th/id/R.76b2ad8c54463e603f626dd6f844518f?rik=m%2fEN7FaC2%2bX66Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc8%2fXja%2fdc8Xjangi.png&ehk=fGnmY4B18qxjm%2fgOO%2fbRgmZixxngHHB7cq6DQo4acVQ%3d&risl=&pid=ImgRaw&r=0" alt="cart" className="cart-image"></img></a>
          <a href="#"> <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png" alt="profile" className="profile-image"></img></a>
        </div>
      </header>

      <main className="content">
        <div className="text">
          <h1>Pro. Beyond.</h1>
          <h2>Iphone 14 Pro</h2>
          <p>Created to change everything for the better. For everyone.</p>

          <button>Shop Now</button>
        </div>

        <div className="iphone-image">
          <a href="#"> <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iphone-14-265x300.jpg?tr=q-100" alt="iphone" className="ipHone"></img></a>
        </div>
      </main>
    </div>
  )
}

