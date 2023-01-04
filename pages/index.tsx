import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { idToLongURL } from '../modules/encrypt/encrypt'
import { shortURLtoID } from '../modules/decrypt/decrypt'
import { dnsCheck } from '../modules/network/dNSCheck'
import { useState } from 'react'

import { useSession, signIn, signOut } from "next-auth/react";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={(e) => {e.preventDefault;signIn()}}>Sign in</button>
        </>
      ) : (
        <main className={styles.main}>
          <div className={styles.header}>
            {/* <Image src={session.user.image} as string /> */}
            <Image src={session.user.image} width={200} height={200} />
            <h4>Signed in as {session.user.name}</h4>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <h1 className={styles.title}>My Blog</h1>
          <div className={styles.row}>
            <div className={styles.blogCard}>
              <Image
                src="/Getting-Started-with-NextJS-Inside.jpeg"
                alt="blog1"
                width={300}
                height={200}
              />
              <div className={styles.blogCardContent}>
                <h2>Nexjs for Beginers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem.
                </p>

                <a href="/blog1">Read More</a>
              </div>
            </div>
            <div className={styles.blogCard}>
              <Image
                src="/pasted image 0.png"
                alt="blog1"
                width={300}
                height={200}
              />
              <div className={styles.blogCardContent}>
                <h2>Django Full Course</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem.
                </p>

                <a href="/blog1">Read More</a>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

// export default function Home() {
//   const { data: session } = useSession();
//   const [urlInput, setURLInput] = useState('');

//   const handleURLInputChange = (e:React.FormEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setURLInput(e.currentTarget.value);
//   }

//   return (
//     <>
//       <Head>
//         <title>TinyURL in Next</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div>
      
//         <input type="text" placeholder='Your Long URL' onChange={e => handleURLInputChange(e)} />

//         <div>{urlInput}</div>

//         <button>Shorten</button>
//         <div>{urlInput}</div>
//         <button onClick={() => console.log(shortURLtoID(idToLongURL(0)))}>Enlongate</button>
//         <button onClick={()=> console.log(dnsCheck("http://google.com"))}>netowrk test</button>
//         <button onClick={()=> signIn()}>Signin</button>
//       </div>
//       {/* <main className={styles.main}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>
//           <div>
//             <a
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div> */}

//     </>
//   )
// }
