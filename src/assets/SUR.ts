import db from "./db";
import {format} from "mysql2";

export default class SUR {
    table_name: string;

    constructor(table_name: string) {
        this.table_name = table_name;
    }

    async save() {
        const _table_name = this.table_name;
        // @ts-ignore
        delete this.table_name;
        return (
            await db.execute(format(`insert into ${_table_name} set ?`, [this]))
        )[0];
    }

    async update(prop: [string, any]) {
        const _table_name = this.table_name;
        // @ts-ignore
        delete this.table_name;
        return await db.execute(
            format(`update ${_table_name} set ? where ${prop[0]} = ?`, [
                this,
                prop[1]
            ])
        );
    }

    async remove(prop: [string, any]) {
        const _table_name = this.table_name;
        // @ts-ignore
        delete this.table_name;
        return await db.execute(
            format(`delete from ${_table_name} where ${prop[0]} = ?`, [prop[1]])
        );
    }
}