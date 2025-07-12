import { Role, RoleModel } from "../domain.layer/models/role/role.model";
import { sequelize } from "../database/db";
import { QueryTypes, Transaction } from "sequelize";

export const getAllRolesQuery = async (): Promise<Role[]> => {
  const roles = await sequelize.query(
    "SELECT * FROM roles ORDER BY created_at DESC, id ASC",
    {
      mapToModel: true,
      model: RoleModel,
    }
  );
  return roles;
};

export const getRoleByIdQuery = async (id: number): Promise<Role | null> => {
  const result = await sequelize.query("SELECT * FROM roles WHERE id = :id", {
    replacements: { id },
    mapToModel: true,
    model: RoleModel,
  });
  return result[0];
};

export const createNewRoleQuery = async (
  role: Partial<Role>,
  transaction: Transaction
): Promise<Role> => {
  const result = await sequelize.query(
    `INSERT INTO roles(name, description) VALUES (:name, :description) RETURNING *`,
    {
      replacements: {
        name: role.name,
        description: role.description,
      },
      mapToModel: true,
      model: RoleModel,
      // type: QueryTypes.INSERT
      transaction,
    }
  );
  return result[0];
};

export const updateRoleByIdQuery = async (
  id: number,
  role: Partial<Role>,
  transaction: Transaction
): Promise<Role | null> => {
  const updateRole: Partial<Record<keyof Role, any>> = {};
  const setClause = ["name", "description"]
    .filter((f) => {
      if (role[f as keyof Role] !== undefined && role[f as keyof Role]) {
        updateRole[f as keyof Role] = role[f as keyof Role];
        return true;
      }
    })
    .map((f) => `${f} = :${f}`)
    .join(", ");

  const query = `UPDATE roles SET ${setClause} WHERE id = :id RETURNING *;`;

  updateRole.id = id;

  const result = await sequelize.query(query, {
    replacements: updateRole,
    mapToModel: true,
    model: RoleModel,
    // type: QueryTypes.UPDATE,
    transaction,
  });

  return result[0];
};

export const deleteRoleByIdQuery = async (
  id: number,
  transaction: Transaction
): Promise<Boolean> => {
  const result = await sequelize.query(
    `DELETE FROM roles WHERE id = :id RETURNING *`,
    {
      replacements: { id },
      mapToModel: true,
      model: RoleModel,
      type: QueryTypes.DELETE,
      transaction,
    }
  );
  return result.length > 0;
};
