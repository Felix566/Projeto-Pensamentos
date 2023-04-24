const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensamentos", "root", "senharoot123", {
  host: "127.17.0.2",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
