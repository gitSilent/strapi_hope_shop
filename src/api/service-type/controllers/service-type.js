'use strict';

/**
 * service-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-type.service-type',
({ strapi }) => ({
    async find(ctx) {
        const result = await super.find(ctx);
        return result;
      },
  
  })
);
