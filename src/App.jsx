import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Antony Luan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis excepturi temporibus delectus repellat quo architecto et beatae omnis quia quis expedita accusantium debitis, modi ullam optio! Repellat, asperiores! Iusto."
          />
          <Post 
            author="Antony Luan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis excepturi temporibus delectus repellat quo architecto et beatae omnis quia quis expedita accusantium debitis, modi ullam optio! Repellat, asperiores! Iusto."
          />
        </main>
      </div>
    </div>
  )
}

