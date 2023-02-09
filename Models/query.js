const sql = require("./db.js");

const Attendance = function(attendance) {
    id: req.body.id
  };

Attendance.getbyId = (id, result) => {
    sql.query(`SELECT sub_id
    FROM TT_2022_23_4_A_SEM8
    WHERE hour(current_time) BETWEEN hour(lec_start) AND hour(lec_end);
    `)
}

