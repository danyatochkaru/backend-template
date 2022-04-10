const db = require("./db"),
    format = require("mysql2").format;

class SUR {
    constructor(table_name) {
        this.table_name = table_name;
    }

    async save() {
        const _table_name = this.table_name;
        delete this.table_name;
        return (
            await db.execute(format(`insert into ${_table_name} set ?`, [this]))
        )[0];
    }

    async update(prop) {
        const _table_name = this.table_name;
        delete this.table_name;
        return await db.execute(
            format(`update ${_table_name} set ? where ${prop[0]} = ?`, [
                this,
                prop[1]
            ])
        );
    }

    async remove(prop) {
        const _table_name = this.table_name;
        delete this.table_name;
        return await db.execute(
            format(`delete from ${_table_name} where ${prop[0]} = ?`, [prop[1]])
        );
    }
}

module.exports = SUR;