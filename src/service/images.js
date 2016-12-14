export const addImg = ({
  dispatch
}, data) => {
  const Images = AV.Object.extend('Imagas');
  const addimg = new Images();
  // addimg.set('name', data.name);
  // addimg.set('url', data.url);
  // addimg.set('state', data.state);
  // addimg.set('type', data.type);
  addimg.save({
    name: data.name,
    url: data.url,
    state: data.state,
    type:data.type
  }).then(function (object) {
    dispatch('addImg', '100');
  });
};

export const queryImg = ({
  dispatch
}, data) => {
  const Images = new AV.Query('Imagas');
  Images.equalTo('type', data.type);
  Images.equalTo('state', data.state);
  Images.find().then(function (results) {
    dispatch('queryImg', results);
  }, function (error) {
  });
};


export const delImg = ({
  dispatch
}, id) => {
  var Img = AV.Object.createWithoutData('Imagas', id);
  Img.destroy().then(function (success) {
    dispatch('delImg', results);
  }, function (error) {
    // 删除失败
  });
};