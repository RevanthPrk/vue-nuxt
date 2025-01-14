export default defineEventHandler(async (event) => {
    const { productId } = event.context.params;
  
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID is required',
      });
    }
  
    const uri = `https://fakestoreapi.com/products/${productId}`;
    console.log('Fetching from URI:', uri);
  
    try {
      const data = await $fetch(uri);
      return data; // Return the product data
    } catch (error) {
      console.error('Error fetching product:', error);
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
      });
    }
  });
  