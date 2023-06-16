import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableInit1686926732257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Initialize uuid for custom {{primary_id}}
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        // Tables
        await this.createEmployeeTable(queryRunner);
        await this.createUserTable(queryRunner);
        await this.createClientTable(queryRunner);
        await this.createActivityLogTable(queryRunner);
        await this.createDeviceTable(queryRunner);
        await this.createIssueTable(queryRunner);
        await this.createRefreshTokenTable(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE if exists employee cascade`);
        await queryRunner.query(`DROP TABLE if exists "user" cascade`);
        await queryRunner.query(`DROP TABLE if exists client cascade`);
        await queryRunner.query(`DROP TABLE if exists activity cascade`);
        await queryRunner.query(`DROP TABLE if exists device cascade`);
        await queryRunner.query(`DROP TABLE if exists issue cascade`);
        await queryRunner.query(`DROP TABLE if exists refresh_token cascade`);
    }

    // Creating Tables
    async createEmployeeTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "employee",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "userId",
                type: "varchar",
              },
              {
                name: "lastName",
                type: "varchar",
              },
              {
                name: "firstName",
                type: "varchar",
              },
              {
                name: "middleName",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "suffix",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "birthdate",
                type: "varchar",
              },
              {
                name: "birthplace",
                type: "varchar",
              },
              {
                name: "gender",
                type: "varchar",
              },
              {
                name: "presentAddress",
                type: "json",
              },
              {
                name: "permanentAddress",
                type: "json",
              },
              {
                name: "status",
                type: "varchar",
                default: "'ACTIVE'",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createUserTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "user",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "email",
                type: "varchar",
              },
              {
                name: "mobileNumber",
                type: "varchar",
              },
              {
                name: "username",
                type: "varchar",
                isUnique: true,
              },
              {
                name: "password",
                type: "varchar",
              },
              {
                name: "salt",
                type: "varchar",
              },
              {
                name: "role",
                type: "varchar",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createClientTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "client",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "userId",
                type: "varchar",
              },
              {
                name: "avatar",
                type: "varchar",
              },
              {
                name: "banner",
                type: "varchar",
              },
              {
                name: "lastName",
                type: "varchar",
              },
              {
                name: "firstName",
                type: "varchar",
              },
              {
                name: "middleName",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "suffix",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "birthdate",
                type: "date",
              },
              {
                name: "birthplace",
                type: "date",
                isNullable: true,
              },
              {
                name: "gender",
                type: "varchar",
              },
              {
                name: "civilStatus",
                type: "varchar",
              },
              {
                name: "nationality",
                type: "varchar",
              },
          
              {
                name: "presentAddress",
                type: "json",
              },
              {
                name: "permanentAddress",
                type: "json",
              },
              {
                name: "termsAndConditions",
                type: "boolean",
              },
              {
                name: "status",
                type: "varchar",
                default: "'PENDING'",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createActivityLogTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "activity",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "ownerId",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "editorId",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "origin",
                type: "varchar",
              },
              {
                name: "details",
                type: "varchar",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createDeviceTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "device",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "userId",
                type: "varchar",
              },
              {
                name: "deviceType",
                type: "varchar",
              },
              {
                name: "registrationToken",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "os",
                type: "varchar",
              },
              {
                name: "osVersion",
                type: "varchar",
              },
              {
                name: "manufacturer",
                type: "varchar",
              },
              {
                name: "model",
                type: "varchar",
              },
              {
                name: "modelVersion",
                type: "varchar",
              },
              {
                name: "uuid",
                type: "varchar",
              },
              {
                name: "ipAddress",
                type: "varchar",
              },
              {
                name: "source",
                type: "varchar",
              },
              {
                name: "browser",
                type: "varchar",
              },
              {
                name: "status",
                type: "enum",
                enum: ["active", "removed"],
                default: "'active'",
              },
              {
                name: "verified",
                type: "boolean",
                default: false,
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createIssueTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "issue",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "userId",
                type: "varchar",
              },
              {
                name: "subject",
                type: "varchar",
              },
              {
                name: "message",
                type: "varchar",
              },
              {
                name: "status",
                type: "enum",
                enum: ["pending", "resolved", "closed"],
                default: "'pending'",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    async createRefreshTokenTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "refresh_token",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "userId",
                type: "varchar",
              },
              {
                name: "deviceId",
                type: "varchar",
                isNullable: true,
              },
              {
                name: "token",
                type: "varchar",
              },
              {
                name: "expiration",
                type: "timestamptz",
              },
              {
                name: "createdAt",
                type: "timestamptz",
                default: "now()",
              },
              {
                name: "updatedAt",
                type: "timestamptz",
                default: "now()",
              },
            ],
          }),
          true,
        );
    }

    // Creating Foreign keys
    async createClientFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "client",
          new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    }

    async createActivityLogFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "activity",
          new TableForeignKey({
            columnNames: ["ownerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    
        await queryRunner.createForeignKey(
          "activity",
          new TableForeignKey({
            columnNames: ["editorId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    }

    async createDeviceFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "device",
          new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    }

    async createIssueFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "issue",
          new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    }

    async createEmployeeFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "employee",
          new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    }

    async createRefreshTokenFK(queryRunner: QueryRunner) {
        await queryRunner.createForeignKey(
          "refresh_token",
          new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
          }),
        );
    
        await queryRunner.createForeignKey(
          "refresh_token",
          new TableForeignKey({
            columnNames: ["deviceId"],
            referencedColumnNames: ["id"],
            referencedTableName: "device",
            onDelete: "CASCADE",
          }),
        );
    }
}
