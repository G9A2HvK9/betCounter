import UserService from "../services/User.service.ts";

export const getAdvertisements = ({ response }: { response: any }) => {
    response.body = {
        data: AdvertisementService.fetchAdvertisements(),
    };
};

export const getAdvertisement = (
    { params, response }: { params: { id: string }; response: any },
) => {
    const advertisement = AdvertisementService.fetchAdvertisement(
        params.id,
    );

    if (advertisement === null) {
        response.status = 400;
        response.body = { msg: `Advertisement with id: ${params.id} not found` };
        return;
    }

    response.status = 200;
    response.body = { data: advertisement };
};

export const addAdvertisement = async (
    { request, response }: { request: any; response: any },
) => {
    if (!request.body()) {
        response.status = 400;
        response.body = {
            success: false,
            msg: "The request must have a body",
        };
        return;
    }

    const data = await request.body().value;

    const advertisement = AdvertisementService.createAdvertisement(
        data,
    );
    response.status = 200;
    response.body = {
        success: true,
        data: advertisement,
    };
};

export const updateAdvertisement = async (
    { params, request, response }: {
        params: { id: string };
        request: any;
        response: any;
    },
) => {
    const advertisement = AdvertisementService.fetchAdvertisement(
        params.id,
    );

    if (!advertisement) {
        response.status = 404;
        response.body = {
            success: false,
            msg: `Advertisement with id: ${params.id} not found`,
        };
        return;
    }

    const data = await request.body().value;
    const updatedAdvertisement = AdvertisementService.updateAdvertisement(
        data,
        params.id,
    );

    if (updatedAdvertisement) {
        response.status = 200;
        response.body = {
            success: true,
            msg: `Update for advert with id ${params.id} was successful`,
        };
        return;
    }

    response.status = 500;
    response.body = {
        success: true,
        msg: `Update for advertisement with id ${params.id} failed`,
    };
};

export const publishAdvertisement = async (
    { request, response }: { request: any; response: any },
) => {
    const data = await request.body().value;

    if (!data) {
        response.status = 400;
        response.body = {
            success: false,
            msg: "No data",
        };
        return;
    }

    const { id, startDate, endDate, isActive } = data;
    const advertisement = AdvertisementService.publishAdvertisement(
        id,
        startDate,
        endDate,
        isActive,
    );
    response.status = 200;
    response.body = {
        success: isActive,
        data: advertisement,
    };
};

export const deleteAdvertisement = (
    { params, response }: { params: { id: string }; response: any },
) => {
    const advertisement = AdvertisementService.deleteAdvertisement(
        params.id,
    );
    response.body = {
        success: true,
        msg: "Advertisement removed",
        data: advertisement,
    };
};

