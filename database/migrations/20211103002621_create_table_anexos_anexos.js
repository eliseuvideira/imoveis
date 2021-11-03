const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.withSchema("anexos").createTable("anexos", (table) => {
    // Fields
    table.text("anexoId").notNullable();
    table.text("nome").notNullable();
    table.text("mimetype").notNullable();
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now());

    // Primary Key
    table.primary(["anexoId"]);
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.withSchema("anexos").dropTable("anexos");
};
