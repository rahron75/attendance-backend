const Atendance = require("./Models/query.js")

exports.create = (req, res) = {
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const attendance = new Attendance ({
    id: req.body.id
  });

exports.find = (req, res) => {

    Attendance.getbyId(attendance.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Tutorial with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Tutorial with id " + req.params.id
              });
            }
          } else res.send(data);
}


//   Attendance.find(attendance, (err, data) =>{
//     if (err)
//         res.status(500).send({
//             message:
//                 err.message || "ERROR while creating "
//         })
//   })
}