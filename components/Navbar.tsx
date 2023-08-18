import Image from "next/image"


export default function Navbar() {

  return (
    <nav className=" navbar bg-primary sticky top-0 z-50">
      <div className="md:navbar-start navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#feature">Our Feature</a></li>
        </ul>
      </div>
      <div className="navbar-end px-8">
        <Image src={"/diabeats-logo.png"} alt={"logo"} width={50} height={50}></Image>
      </div>
    </nav>

  )
}
