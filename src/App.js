import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { StoreProvider } from './contextAPI/StoreContext';

function App() {
   const [selectedImg, setSelectedImg] = useState(null);

   return (
      <div className='App'>
         <StoreProvider>
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
               <Modal
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
               />
            )}
         </StoreProvider>
      </div>
   );
}

export default App;
