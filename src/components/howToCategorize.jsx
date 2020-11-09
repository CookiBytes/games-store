// Insert this in Products, where all the variables are:

const [category, setCategory] = useState(FUN);
const getProductsInCategory = () => {
  return products.filter((product) => product.category === category);
};

// Insert this in Products:

<select onChange={(event) => setCategory(event.target.value)}>
  <option value={FUN}>{FUN}</option>
  <option value={ADVENTURE}>{ADVENTURE}</option>
</select>;

// Under the flex-cards div, instead of:
{
  products.map();
}

// Replace it with:

{
  getProductsInCategory();
}
