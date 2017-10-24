const hydrate = require('feathers-sequelize/hooks/hydrate');

function include() {
  return function (hook) {
    const type = hook.app.service('type').Model;
    const category = hook.app.service('category').Model;
    const sex = hook.app.service('sex').Model;
    const specie = hook.app.service('specie').Model;
    const association = { include: [{ model: type},{ model: category},{ model: sex},{ model: specie}]};

    switch (hook.type) {
      case 'before':
        hook.params.sequelize = Object.assign(association, { raw: false });
        return Promise.resolve(hook);
        break;

      case 'after':
        hydrate( association ).call(this, hook);
        break;
    }
  }
}

module.exports = {
  before: {
    all: [ include() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ include() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};


// const productPrice = hook.app.service('product-prices').Model;
// const currencies = hook.app.service('currencies').Model;
// const edizm = hook.app.service('edizm').Model;
//
// const pricesShema = { model: productPrice,
//   attributes: ['price', 'price_promo', 'price_card','publish'],
//   include: [
//     {
//       model: currencies,
//       attributes: ['title', 'socr']
//     },
//   ]
// };
//
// const edizmShema = { model: edizm,
//   attributes: ['title', 'detail']
// };
//
// const association = { include: [edizmShema,pricesShema] };
