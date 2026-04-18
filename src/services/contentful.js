import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getProducts = async () => {
  // Check if products exist in localStorage
  const cachedProducts = localStorage.getItem('bhollumProducts');
  const cacheTimestamp = localStorage.getItem('bhollumProductsTimestamp');
  
  // If cache exists and is less than 1 hour old, return cached data
  if (cachedProducts && cacheTimestamp) {
    const now = new Date().getTime();
    const cacheAge = now - parseInt(cacheTimestamp);
    const oneHour = 60 * 60 * 1000;
    
    if (cacheAge < oneHour) {
      console.log('Loading products from cache...');
      return JSON.parse(cachedProducts);
    }
  }
  
  // Otherwise fetch from Contentful
  try {
    console.log('Fetching products from Contentful...');
    const response = await client.getEntries({
      content_type: 'prodcut',
    });
    
    console.log('Raw response from Contentful:', response.items);
    
    const products = response.items.map(item => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        name: fields.name || 'Unknown Product',
        category: fields.category || fields.tag || 'flour',
        price: fields.price || 0,
        image: fields.image?.fields?.file?.url || fields.imageUrl || null,
        badge: fields.badge || null,
        description: fields.description || fields.desc || '',
        inStock: fields.inStock !== false,
      };
    });
    
    console.log('Mapped products:', products);
    
    // Save to localStorage with timestamp
    localStorage.setItem('bhollumProducts', JSON.stringify(products));
    localStorage.setItem('bhollumProductsTimestamp', new Date().getTime().toString());
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    
    // If fetch fails, try to return cached products even if expired
    if (cachedProducts) {
      console.log('Fetch failed, using expired cache...');
      return JSON.parse(cachedProducts);
    }
    
    return [];
  }
};

// Force refresh products (clear cache and fetch again)
export const refreshProducts = async () => {
  localStorage.removeItem('bhollumProducts');
  localStorage.removeItem('bhollumProductsTimestamp');
  return await getProducts();
};

export default client;