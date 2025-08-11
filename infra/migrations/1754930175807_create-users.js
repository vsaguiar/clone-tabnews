exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    // Para referência, o GitHub limita nomes de usuário a 39 caracteres.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },

    // Por que 254 de comprimento? https://stackoverflow.com/a/1199238
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    // Por que 72 de comprimento? https://security.stackexchange.com/q/39849
    password: {
      type: "varchar(72)",
      notNull: true,
    },

    // Por que 'timestamp' com 'timezone': https://justatheory.com/2012/04/postgres-use-timestamptz/
    created_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },

    updated_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
  });
};

exports.down = false;
