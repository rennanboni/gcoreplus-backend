import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { DriverUtils } from 'typeorm/driver/DriverUtils';

export class CreateTableUser1655759455144 implements MigrationInterface {

  public async up(qr: QueryRunner): Promise<void> {
    let numericType = 'int';
    if (DriverUtils.isSQLiteFamily(qr.connection.driver)) {
      numericType = 'integer';
    } else if (qr.connection.driver.options.type === 'spanner') {
      numericType = 'int64';
    }

    const table: Table = new Table({
      name: 'User',
      columns: [
        {
          name: 'Id',
          type: numericType,
          isPrimary: true,
          isGenerated: qr.connection.driver.options.type !== 'spanner',
          generationStrategy: qr.connection.driver.options.type === 'spanner' ? undefined : 'increment',
        },
        {
          name: 'FirstName',
          type: qr.connection.driver.options.type === 'spanner' ? 'string' : 'varchar',
          precision: 150,
          isUnique: true,
          isNullable: false,
        },
        {
          name: 'LastName',
          type: qr.connection.driver.options.type === 'spanner' ? 'string' : 'varchar',
          precision: 150,
          isUnique: true,
          isNullable: false,
        },

        // Default Columns
        {
          name: 'CreatedAt',
          type: 'timestamp',
          isNullable: true,
          default: 'now()',
        },
        {
          name: 'UpdatedAt',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'DeletedAt',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });
    await qr.createTable(table);
  }

  public async down(qr: QueryRunner): Promise<void> {
    const table: Table = await qr.getTable('User');
    await qr.dropTable(table);
  }

}
