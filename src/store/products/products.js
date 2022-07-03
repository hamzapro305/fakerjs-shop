import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  slectedProduct: {},
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state) => {
      const getProduct = () => {
        const id = faker.database.mongodbObjectId();
        const name = faker.commerce.product();
        const price = faker.commerce.price(1, 500);
        const desc = faker.commerce.productDescription();
        const material = faker.commerce.productMaterial();
        const category = faker.commerce.department();
        const image = faker.image.imageUrl(640, 480, name, true);
        return {
          id,
          name,
          price,
          desc,
          material,
          category,
          image,
        };
      };
      state.products = [...Array(1000)].map((_) => ({
        ...getProduct(),
      }));
    },
  },
});

export const { getAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;