//path collaborations

const dataCollaborations = [
    { collaboration_task: "help monster in cave demon" },
    { collaboration_assign: "support" },
    { collaboration_comment: "verry good all" },
    { collaboration_progress: "Everything is going well" }
];

const collaborationModel = {
    getAllCollaborations : () => dataCollaborations,
};

module.exports = collaborationModel;