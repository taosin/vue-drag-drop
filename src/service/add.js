export const addCate = ({
  dispatch
}, data) => {
  const Cates = AV.Object.extend('Cates');
  const addcate = new Cates();
  addcate.save({
    name: data.name,
    iscate: data.iscate,
    state: data.state,
    op: data.op
  }).then(function (object) {
    dispatch('addCate', '100');
  });
};
export const queryCates = ({
  dispatch
}, data) => {
  const cates = new AV.Query('Cates');
  cates.find().then(function (results) {
    dispatch('queryCates', results);
  }, function (error) {
  });
};
// 产品
export const addProduct = ({
  dispatch
}, data) => {
  const Products = AV.Object.extend('Products');
  const addproduct = new Products();
  addproduct.save({
    name: data.name,
    code: data.code,
    img: data.img,
    content: data.content,
    state:data.state,
    type:data.type
  }).then(function (object) {
    dispatch('addProduct', '100');
  });
};

export const getProducts = ({
  dispatch
}, data) => {
  const query = new AV.Query('Products');
  query.equalTo('state', '1');
  query.descending('createdAt');
    query.limit(data.limit); // 最多返回 10 条结果
    query.skip(data.start);
    query.find().then(function(results) {
      dispatch('getProducts', results);
    }, function(error) {});
  };


  export const getProductsCount = ({
    dispatch
  }, data) => {
    const query = new AV.Query('Products');
    query.equalTo('state', '1');
    query.count().then(function (count) {
      dispatch('getProductsCount', count);
    }, function (error) {
    });
  };

// 案例
  export const addCase = ({
  dispatch
}, data) => {
  const Products = AV.Object.extend('Cases');
  const addproduct = new Products();
  addproduct.save({
    name: data.name,
    code: data.code,
    img: data.img,
    state:data.state,
  }).then(function (object) {
    dispatch('addCase', '100');
  });
};

export const getCases = ({
  dispatch
}, data) => {
  const query = new AV.Query('Cases');
  query.equalTo('state', '1');
  query.descending('createdAt');
    query.limit(data.limit); // 最多返回 10 条结果
    query.skip(data.start);
    query.find().then(function(results) {
      dispatch('getCases', results);
    }, function(error) {});
  };


  export const getCasesCount = ({
    dispatch
  }, data) => {
    const query = new AV.Query('Cases');
    query.equalTo('state', '1');
    query.count().then(function (count) {
      dispatch('getCasesCount', count);
    }, function (error) {
    });
  };