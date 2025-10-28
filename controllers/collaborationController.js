const collaborationModel = require("../models/collaborationModel");


const handleGetCollaborations = (req, res) => {
    const collaborationData = collaborationModel.getAllCollaborations();
    res.json(collaborationData);
};

const collaborationController = {
    handleGetCollaborations,
};

module.exports = collaborationController;