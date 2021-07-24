import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import useStorage from '../hooks//useStorage';

const ProgressBar = ({ file, setFile }) => {
   const { url, progress } = useStorage(file);

   useEffect(() => {
      if (url) {
         setFile(null);
      }
   }, [url]);

   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: progress + '%' }}
         className='progress-bar'
         style={{ width: progress + '%' }}
      ></motion.div>
   );
};

export default ProgressBar;
