import { startSession } from "mongoose";
import { Transfer } from "./model.js";
import { getTeamByMangerId, sumPlayersValue, updateTeam } from "../teams/service.js";
import { getTeamById } from "../teams/service.js";
import { getPlayerById, updatePlayer } from "../players/service.js";

export const createTransfer = async (transfer) => {
    let newTransfer = new Transfer(transfer);
    await newTransfer.save();
    return newTransfer;
}

export const getAllTransfers = async () => {
    return await Transfer.find().populate('player');
}

export const getTransferById = async (id) => {
    return await Transfer.findById(id).populate('player');
}

export const getTransferByPlayer = async (player) => {
    return await Transfer.findOne({ player });
}

export const deleteTransfer = async (transferId) => {
    return await Transfer.deleteOne(transferId);
}

export const buyFromTransfer = async (transfer, buyingManagerId) => {
    let session;
    let oldTeam, newTeam, player;
    let randomIncrement, playerOldMarketValue;
    try {
        session = await startSession();
        session.startTransaction();

        player = await getPlayerById(transfer.player._id);
        newTeam = await getTeamByMangerId(buyingManagerId);
        oldTeam = await getTeamById(player.teamId)
        
        if (newTeam.budget < transfer.price) {
            session.abortTransaction();
            return 'Not enough funds';
        }

        randomIncrement = (Math.floor(Math.random() * 100) + 10) / 100;
        playerOldMarketValue = player.marketValue;
        console.log(playerOldMarketValue);

        player.teamId = newTeam._id;
        player.managerId = buyingManagerId;
        player.marketValue += (randomIncrement * player.marketValue);
        await updatePlayer(player._id, player, session);

        oldTeam.budget += transfer.price;
        oldTeam.value -= playerOldMarketValue;
        newTeam.budget -= transfer.price;
        newTeam.value += player.marketValue;
        console.log(oldTeam, newTeam);
        await updateTeam(newTeam._id, newTeam, session);
        await updateTeam(oldTeam._id, oldTeam, session);

        await Transfer.deleteOne({ _id: transfer._id }).session(session);

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        console.log(error);
        throw error;
    } finally {
        await session.endSession();
    }
    return 'Transfer successful';
}

