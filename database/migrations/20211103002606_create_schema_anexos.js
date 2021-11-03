const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createSchema("anexos");
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropSchema("anexos");
};
