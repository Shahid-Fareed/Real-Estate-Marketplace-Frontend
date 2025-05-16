import React from "react";
import useUserPermissions from "../../hooks/useUserPermissions";

const Actions = ({ row, onDelete, onEdit, permEdit, permDel }: any) => {
  const userPermission = useUserPermissions();
  return (
    <div>
      <td className="icondiv">
        {
          userPermission?.includes(permDel) ? <i
            className="mdi mdi-trash-can-outline iconsize"
            onClick={() => onDelete(row.id)}
          /> : null
        }
        {
          userPermission?.includes(permEdit) ? <i
            className="mdi mdi-pencil-box-outline iconsize"
            onClick={() => onEdit(row.id)}
          /> : null
        }

      </td>
    </div>
  );
};

export default Actions;
