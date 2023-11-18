'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Roles', [
      {
        roleName: 'read categories',
        description: "/admin/get-categories",
      }, {
        roleName: 'create categories',
        description: "/admin/save-category",
      }, {
        roleName: 'update categories',
        description: "/admin/update-category",
      }, {
        roleName: 'read products',
        description: "/admin/get-products",
      }, {
        roleName: 'create products',
        description: "/admin/save-product",
      }, {
        roleName: 'upload-images',
        description: "/admin/upload-images",
      }, {
        roleName: 'update product',
        description: "/admin/update-product",
      }, {
        roleName: 'get info account',
        description: "/admin/get-info-account",
      }, {
        roleName: 'read list users',
        description: "/admin/get-users",
      }, {
        roleName: 'create group',
        description: "/admin/create-group",
      }, {
        roleName: 'read group',
        description: "/admin/get-groups",
      }, {
        roleName: 'read roles',
        description: "/admin/get-roles",
      }, {
        roleName: 'update info user',
        description: "/admin/update-user",
      }, {
        roleName: 'read group with role',
        description: "/admin/get-group-role/",
      }, {
        roleName: 'assign group with role',
        description: "/admin/save-group-role",
      }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
