import { errorResponse } from "../api/utils/responses.js";

export default function(err, req, res, next) {
    res.status(500).send(errorResponse('Something failed', 500));
}