const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.withSchema("usuarios").createTable("usuarios", (table) => {
    // Fields
    table.increments("usuarioId", { primaryKey: false }).notNullable();
    table.text("login").notNullable();
    table.text("senha").notNullable();
    table.dateTime("lastLogin");
    table.text("nome").notNullable();
    table.boolean("isRoot").notNullable().defaultTo(false);
    table.boolean("resetar").notNullable().defaultTo(false);
    table.text("avatarId").notNullable();
    table.boolean("ativo").notNullable().defaultTo(true);
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updatedAt").notNullable().defaultTo(knex.fn.now());

    // Primary Key
    table.primary(["usuarioId"]);

    // Unique
    table.unique(["login"]);

    // Foreign Keys
    table
      .foreign(["avatarId"])
      .references(["anexoId"])
      .inTable("anexos.anexos")
      .onDelete("no action")
      .onUpdate("cascade");
  });

  // Constraints
  // apenas letras minúsculas
  // a-z 0-9 . - _ @
  await knex.raw(`
    alter table "usuarios"."usuarios"
    add constraint "ck_usuarios_usuarios_login" check ("login" ~ '^[a-z0-9\\.\\-_@]+$');
  `);

  await knex.raw(`
    create trigger "tr_usuarios_usuarios_setUpdatedAt"
    before update on "usuarios"."usuarios"
    for each row
    execute procedure "setUpdatedAt"();
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.withSchema("usuarios").dropTable("usuarios");
};
