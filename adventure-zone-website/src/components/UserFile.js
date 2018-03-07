// class userName {
//     constructor(user) {
//         this.user = user;
//
//         this.getName = this.getName.bind(this);
//         this.setName = this.setName.bind(this);
//     }
//
//     get user() {
//         return this.user;
//     }
//
//     set user(props) {
//         this.user = props;
//     }
// }
//
// export let user = new userName();

// function user() {
//     this.name;
// }
//
// user.prototype = {
//     get username() {
//         if (!this.name) {
//             person = new user();
//         }
//         return this.name;
//     },
//
//     set username(name) {
//         this.name = name;
//     }
// };
//
// export let person;

// class userName {
//     static inst = null;
//     static create_inst(name) {
//         var obj = new userName();
//         obj.inst = name;
//         return obj;
//     }
//
//     static get_name() {
//         if (!userName.inst) {
//             userName.inst = userName.create_inst('');
//         }
//         return userName.inst;
//     }
//
//     static set_name(name) {
//         userName.inst = name;
//     }
// }
//
// // const userNameClass = userName.get_name();
// export default userName;

// function User() {
//     if (typeof User.instance === 'object') {
//         return User.instance;
//     }
//
//     this.name = 'bob';
//
//     User.instance = this;
//     return this;
// }
//
// export default User;

var userName = {
    username: '',
    get name() {
        return this.username;
    },
    set name(props) {
        this.username = props;
    }
};

export const User = userName;