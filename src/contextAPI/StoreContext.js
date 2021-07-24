import { createContext, useContext } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

const StoreContext = createContext();

export const useStore = () => {
   return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
   // Delete URL

   const deleteUrl = (doc) => {
      const ref = projectStorage.refFromURL(doc.url);
      ref.delete().then(() => {
         console.log('Deleted');
      });
   };

   const deletedb = (doc) => {
      projectFirestore
         .collection('images')
         .doc(doc.id)
         .delete()
         .then(() => {
            console.log('Deleted');
         });
   };

   const value = { deleteUrl, deletedb };

   return (
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
   );
};
