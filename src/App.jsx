import { useCallback, useState } from 'react'
import Layout from './components/Layout'
import Loader from './components/Loader'

export default function App(){
  const [ready,setReady] = useState(false)
  const complete = useCallback(() => setReady(true), [])
  return <>
    {!ready && <Loader onComplete={complete} />}
    <div className={ready ? 'app-ready' : 'app-hidden'}>
      <Layout />
    </div>
  </>
}
