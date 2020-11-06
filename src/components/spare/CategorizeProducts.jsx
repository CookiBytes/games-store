// Insert this in Products, line 38

const [category, setCategory] = useState(FUN);
const getProductsInCategory = () => {
  return products.filter((product) => product.category === category);
};

// Insert this in Products, line 42

<select onChange={(event) => setCategory(event.target.value)}>
  <option value={FUN}>{FUN}</option>
  <option value={ADVENTURE}>{ADVENTURE}</option>
</select>;
