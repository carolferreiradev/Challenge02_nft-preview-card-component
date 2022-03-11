import Head from "next/head";
import Image from "next/image";
import styled from "./Home.module.scss";

export function Home() {
  return (
    <>
    <Head>
      <title>Frontend Mentor | NFT Preview Card</title>
    </Head>
      <main className={styled.main}>
        <div className={styled.card}>
          <section>
            <div className={styled.cardImageContent}>
              <Image
                src="/image-equilibrium.jpg"
                objectFit="cover"
                layout="fill"
                alt="Equilibrium"
              />
              <div className={styled.hoverImage}>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h48v48H0z" />
                    <path
                      d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                      fill="#FFF"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </section>
          <section className={styled.cardTextsContent}>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div>
              <span>
                <div className={styled.cardTextsContentIcon}>
                  <Image
                    src="/icon-ethereum.svg"
                    objectFit="contain"
                    layout="fill"
                    alt="Etherium"
                  />
                </div>
                0.041 ETH
              </span>
              <span>
                <div className={styled.cardTextsContentIcon}>
                  <Image
                    src="/icon-clock.svg"
                    objectFit="contain"
                    layout="fill"
                    alt="Clock"
                  />
                </div>
                3 days left
              </span>
            </div>
          </section>
          <div className={styled.divider}></div>
          <section className={styled.cardUser}>
            <div className={styled.cardUserAvatar}>
              <Image
                src="/image-avatar.png"
                objectFit="contain"
                layout="fill"
                alt="Avatar"
              />
            </div>
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </section>
        </div>
      </main>
      <footer className={styled.footer}>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/home"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor.
          </a>
        </p>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/carolferreiradev"
            target="_blank"
            rel="noreferrer"
          >
            Carol Ferreira.
          </a>
        </p>
      </footer>
    </>
  );
}
