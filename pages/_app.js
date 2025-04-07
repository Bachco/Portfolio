import '../styles/globals.css';

//components
import Layout from '../components/Layout/Layout';
import Transition from '../components/Transition';


//router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full min-h-[100dvh]'>
          <Transition />
          <Component {...pageProps}/> 
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
