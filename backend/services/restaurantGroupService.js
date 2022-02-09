/**
 * db is our data access object, an abstraction layer on top of our PostgreSQL database
 * the ORM (object-relational mapper) that we are using is Sequelize
 */
 import db from "../models/index";
 import restaurantService from './restaurantService';
 
 async function getRestaurantGroup(id) {
     let restaurantGroup =  await db.RestaurantGroup.findByPk(id);
     return restaurantGroup
 }
 
 async function getRestaurantGroups() {
     
     return await db.RestaurantGroup.findAll();
 }

async function createRestaurantGroup(name, description, restaurantIds) {
    return await db.RestaurantGroup.create({
         name,
         description,
         restaurantIds,
     });
 }
 
 const restaurantGroupService = { getRestaurantGroup, getRestaurantGroups, createRestaurantGroup};
 export default restaurantGroupService;
 