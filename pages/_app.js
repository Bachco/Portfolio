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
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="h-full md:pb-0 pb-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>

        {/* Transition ide nad tým */}
        <Transition key={`transition-${router.route}`} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
