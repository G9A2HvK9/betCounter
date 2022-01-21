import { userCollection } from "../database/mongo.ts";


export const getUsers = async ({ request, response }: { request: any, response: any }) => {
    const users = userCollection.find()
    if (users) {
        response.status = 200;
        response.body = {
            success: true,
            data: users
        }
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

