const oracledb = require("oracledb");
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.connectionClass = "NodePool";

async function run() {
  pool = await oracledb.createPool({
    user: "SCOTT",
    password: "TIGER",
    connectString: "localhost:1522/orclpdb.oradev.oraclecorp.com:POOLED",
    poolMax: 1,
    poolMin: 1,
    poolPingInterval: 0,
  });
  connection = await pool.getConnection();
  console.log("System Date:");
  result = await connection.execute(
    `SELECT sysdate
     FROM dual`
  );
  let ts = result.rows[0][0];
  console.log(ts);

  if (connection) await connection.close();
}
run();
