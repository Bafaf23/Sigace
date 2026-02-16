import mysql from "mysql2/promise";

export async function query(sql, value = []) {
  const dbconnection = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: 10,
    queueLimit: 0,
  });

  try {
    const [resul] = await dbconnection.execute(sql, value);
    console.log(`Conexcion exitisa con la base de datos`);
    dbconnection.end();
    return resul;
  } catch (error) {
    console.error(
      `Ops, ocurrio un error al intentarse conecatar con la base de datos${error.menssage}`
    );
    dbconnection.end();
  }
}
