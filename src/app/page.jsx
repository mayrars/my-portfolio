import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo porro similique aliquid explicabo sunt veniam ducimus velit eaque vel eum aut magnam, accusamus, sint animi ad hic enim officia!</p>
      </div>
    </main>
  )
}
