 
import Link from "next/link" ;

export default function Header () {
    return(
        <div className="home">
            <header className="header">
            <ul className="headerButtons">
                <Link href={"/"}>
                <li>Home</li></Link>
                <li>
                    <Link href="/about-us">About us</Link>
                </li>
                <li>
                    <Link href="/contact-us">Contact us</Link>
                </li>
                <li>
                    <Link href="/jobs">Jobs</Link>
                </li>
             </ul>              
            </header>
            

        </div>
    )
    
}