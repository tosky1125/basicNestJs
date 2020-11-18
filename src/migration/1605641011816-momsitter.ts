import { MigrationInterface, QueryRunner } from 'typeorm';

export class momsitter1605641011816 implements MigrationInterface {
  name = 'momsitter1605641011816';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `sitter_entity` (`sitterId` int NOT NULL AUTO_INCREMENT, `careableAge` int NOT NULL, `introduction` varchar(255) NOT NULL, `primaryId` int NULL, UNIQUE INDEX `REL_13b15bd1a99ae136959cb2f185` (`primaryId`), PRIMARY KEY (`sitterId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `user_entity` (`primaryId` int NOT NULL AUTO_INCREMENT, `password` varchar(255) NOT NULL, `userName` varchar(255) NOT NULL, `dateOfBirth` int NOT NULL, `gender` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `parentId` int NULL, `sitterId` int NULL, UNIQUE INDEX `IDX_fa501a26ccfaded22ce966337e` (`userId`), UNIQUE INDEX `REL_bd5514511f034833cfb19adbbd` (`parentId`), UNIQUE INDEX `REL_8e297c3cdb6ee7e1477fd904bf` (`sitterId`), PRIMARY KEY (`primaryId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `parent_entity` (`parentId` int NOT NULL AUTO_INCREMENT, `childAge` int NOT NULL, `application` varchar(255) NOT NULL, `primaryId` int NULL, UNIQUE INDEX `REL_0a6d920862dab57a0118ef3145` (`primaryId`), PRIMARY KEY (`parentId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `sitter_entity` ADD CONSTRAINT `FK_13b15bd1a99ae136959cb2f185b` FOREIGN KEY (`primaryId`) REFERENCES `user_entity`(`primaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `user_entity` ADD CONSTRAINT `FK_bd5514511f034833cfb19adbbd5` FOREIGN KEY (`parentId`) REFERENCES `parent_entity`(`parentId`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `user_entity` ADD CONSTRAINT `FK_8e297c3cdb6ee7e1477fd904bfd` FOREIGN KEY (`sitterId`) REFERENCES `sitter_entity`(`sitterId`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `parent_entity` ADD CONSTRAINT `FK_0a6d920862dab57a0118ef3145e` FOREIGN KEY (`primaryId`) REFERENCES `user_entity`(`primaryId`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `parent_entity` DROP FOREIGN KEY `FK_0a6d920862dab57a0118ef3145e`',
    );
    await queryRunner.query(
      'ALTER TABLE `user_entity` DROP FOREIGN KEY `FK_8e297c3cdb6ee7e1477fd904bfd`',
    );
    await queryRunner.query(
      'ALTER TABLE `user_entity` DROP FOREIGN KEY `FK_bd5514511f034833cfb19adbbd5`',
    );
    await queryRunner.query(
      'ALTER TABLE `sitter_entity` DROP FOREIGN KEY `FK_13b15bd1a99ae136959cb2f185b`',
    );
    await queryRunner.query(
      'DROP INDEX `REL_0a6d920862dab57a0118ef3145` ON `parent_entity`',
    );
    await queryRunner.query('DROP TABLE `parent_entity`');
    await queryRunner.query(
      'DROP INDEX `REL_8e297c3cdb6ee7e1477fd904bf` ON `user_entity`',
    );
    await queryRunner.query(
      'DROP INDEX `REL_bd5514511f034833cfb19adbbd` ON `user_entity`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_fa501a26ccfaded22ce966337e` ON `user_entity`',
    );
    await queryRunner.query('DROP TABLE `user_entity`');
    await queryRunner.query(
      'DROP INDEX `REL_13b15bd1a99ae136959cb2f185` ON `sitter_entity`',
    );
    await queryRunner.query('DROP TABLE `sitter_entity`');
  }
}
