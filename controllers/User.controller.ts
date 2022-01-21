import { userCollection } from "../database/mongo.ts";
import { IUser } from "../interfaces/User.interface.ts";


export const getUsers = async ({ request, response }: {request: any, response: any}) => {
    
    try {
        const all_users = await userCollection.find({}, { noCursorTimeout: false} ).toArray()
        response.status = 200
        response.body = all_users
    } catch (err) {
        console.log(err)
    }
}

export const addUser = async ({ request, response }: {request: any, response: any }) => {
    const { firstName, lastName, userName, email } = await request.body().value

    const user:any = {
         firstName,
         lastName,
         userName,
         email
    }

    try {
        const id = await userCollection.insertOne(user)
        user._id = id
        response.status = 200
        response.body = user
    } catch (err) {
        console.log(err)
    }
};


// export const getUser = (
//     { params, response }: { params: { id: string }; response: any },
// ) => {
//     const advertisement = userService.fetchAdvertisement(
//         params.id,
//     );

//     if (advertisement === null) {
//         response.status = 400;
//         response.body = { msg: `Advertisement with id: ${params.id} not found` };
//         return;
//     }

//     response.status = 200;
//     response.body = { data: advertisement };
// };

// export const addUser = async (
//     { request, response }: { request: any; response: any },
// ) => {
//     if (!request.body()) {
//         response.status = 400;
//         response.body = {
//             success: false,
//             msg: "The request must have a body",
//         };
//         return;
//     }

//     const data = await request.body().value;

//     const advertisement = userService.createAdvertisement(
//         data,
//     );
//     response.status = 200;
//     response.body = {
//         success: true,
//         data: advertisement,
//     };
// };

// export const updateUser = async (
//     { params, request, response }: {
//         params: { id: string };
//         request: any;
//         response: any;
//     },
// ) => {
//     const advertisement = userService.fetchAdvertisement(
//         params.id,
//     );

//     if (!advertisement) {
//         response.status = 404;
//         response.body = {
//             success: false,
//             msg: `Advertisement with id: ${params.id} not found`,
//         };
//         return;
//     }

//     const data = await request.body().value;
//     const updatedAdvertisement = userService.updateAdvertisement(
//         data,
//         params.id,
//     );

//     if (updatedAdvertisement) {
//         response.status = 200;
//         response.body = {
//             success: true,
//             msg: `Update for advert with id ${params.id} was successful`,
//         };
//         return;
//     }

//     response.status = 500;
//     response.body = {
//         success: true,
//         msg: `Update for advertisement with id ${params.id} failed`,
//     };
// };

// export const publishAdvertisement = async (
//     { request, response }: { request: any; response: any },
// ) => {
//     const data = await request.body().value;

//     if (!data) {
//         response.status = 400;
//         response.body = {
//             success: false,
//             msg: "No data",
//         };
//         return;
//     }

//     const { id, startDate, endDate, isActive } = data;
//     const advertisement = userService.publishAdvertisement(
//         id,
//         startDate,
//         endDate,
//         isActive,
//     );
//     response.status = 200;
//     response.body = {
//         success: isActive,
//         data: advertisement,
//     };
// };

// export const deleteUser = (
//     { params, response }: { params: { id: string }; response: any },
// ) => {
//     const advertisement = userService.deleteAdvertisement(
//         params.id,
//     );
//     response.body = {
//         success: true,
//         msg: "Advertisement removed",
//         data: advertisement,
//     };
// };

