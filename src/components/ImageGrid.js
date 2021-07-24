import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useStore } from '../contextAPI/StoreContext';

const ImageGrid = ({ setSelectedImg }) => {
   const { docs } = useFirestore('images');
   const { deleteUrl, deletedb } = useStore();

   console.log(docs);

   const handleDelete = (doc) => (e) => {
      deleteUrl(doc);
      deletedb(doc);
   };

   return (
      <div className='img-grid'>
         {docs &&
            docs.map((doc) => (
               <div className='card' key={doc.id}>
                  <motion.div
                     whileHover={{ opacity: 1 }}
                     layout
                     className='img-wrap'
                     key={doc.id}
                     onClick={() => setSelectedImg(doc.url)}
                  >
                     <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        src={doc.url}
                        alt=''
                     />
                  </motion.div>
                  <button onClick={handleDelete(doc)}>delete</button>
               </div>
            ))}
      </div>
   );
};

export default ImageGrid;
