//Enum
//set of fixed string leteralk
// type userRole = 'Admin' | 'Editor' |'Viewer';
// enum userRole {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }
var userRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
var canEdit = function (role) {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(userRole.Admin);
console.log(isEditPermissable);
