//Enum

//set of fixed string leteralk

// type userRole = 'Admin' | 'Editor' |'Viewer';

// enum userRole {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }

const userRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;


const canEdit = (role:typeof userRole[keyof typeof userRole]) => {
  if (role === userRole.Admin || role === userRole.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
