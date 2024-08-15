const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgresql://cardb_owner:7OBiHUG9VSXR@ep-rough-leaf-a58sfwdn.us-east-2.aws.neon.tech/cardb?sslmode=require',
})

module.exports = {
    pool
}