import { GraphQLError } from "graphql";
import restaurantGroupService from "../services/restaurantGroupService";

const restaurantGroupResolvers = {
    Query: {
      restaurantGroup: async (_parent, { id }) => {
        return await restaurantGroupService.getRestaurantGroup(id);
      },
      restaurantGroups: async () => {
        return await restaurantGroupService.getRestaurantGroups();
      }
    },
    Mutation: {
      createRestaurantGroup: async (_parent, { name, description, restaurantIds }) => {
        return await restaurantGroupService.createRestaurantGroup(name, description, restaurantIds);
      },
    }
};

export default restaurantGroupResolvers;
