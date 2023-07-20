import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Container from '@mui/material/Container';
import { MensagemAlerta } from '../utils/comuns/mensagemAlerta';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcela Love Dogs</title>
        <meta name="description" content="Sistema de apoio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodoguinho.png" />
      </Head>
      <Container maxWidth="lg">
        <main className={styles.main}>
          <div className={styles.description}>
            <Image
              src="/logo_mld_circle_transparente.png"
              alt="Logo Marcela Love Dogs"
              width={220}
              height={200}
              priority
            />
          </div>
          <div className={styles.containerLinkInsta}>
            <Link
              href="https://instagram.com/marcelalovedogs?igshid=MzRIODBiNWFIZA=="
              style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <InstagramIcon fontSize='small'/> @marcelalovedos
            </Link>
          </div>
          <div className={styles.containerWhats}>
            <Link
              href="https://api.whatsapp.com/send?1=pt_br&phone=5561983773747"
              style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", color: "green" }}
            >
              <WhatsAppIcon fontSize='small'/> (61) 983773747
            </Link>
          </div>
        </main>
        <footer className={styles.grid}>
          <p>By{' Max Pinheiro'}</p>
        </footer>
      </Container>
      <MensagemAlerta />
    </>
  )
}
