import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { sampleProducts } from './sampleProducts';

export const initializeProducts = async () => {
  try {
    // Check if products already exist
    const productsRef = collection(db, 'products');
    const existingProducts = await getDocs(query(productsRef, where('featured', '==', true)));
    
    if (existingProducts.empty) {
      // Add sample products
      for (const product of sampleProducts) {
        await addDoc(collection(db, 'products'), {
          ...product,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      console.log('Sample products initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing products:', error);
  }
};