// 'use strict';

// /**
//  * service controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::service.service');


'use strict';

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service',
({ strapi }) => ({
    async find(ctx) {
        const result = await super.find(ctx);
        return result;
      },
  
  })
);
