import Header from "./componenets/header";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
    <div>
      <Header/>
    </div>

<div className="introSection">
<h1>Welcome to My Homepage</h1>
<div className="imageContainer">
<Image
  src="/WhatsApp Image 2024-08-21 at 14.33.39_3c0673ad.jpg" 
  alt="My Image"
  width={500} 
  height={300}/>
</div>
<p>Hello! My name is <b>Jamshed Ali</b>. I am a web developer with a passion for creating interactive and user-friendly websites. I love working on modern web technologies and always strive to learn new skills. Feel free to explore my website and get in touch if you'd like to collaborate or learn more about my work!</p>
   </div>
   </div>
  );
}
