var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'coursetrain',
    charset: 'utf8_general_ci'
});

// Return a promise to get results / Normal connection.query cant'
const getAllCourses = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `courses`', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getCourseByID = async function (id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `courses` WHERE id = ?', [id], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getTop1CourseDESC = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `courses` ORDER BY id DESC LIMIT 1', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getAllAnswers = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `answers`', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getAnswerByID = async function (id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `answers` WHERE id = ?', [id], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getAllAnswerByQuestionId = async function (id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `content` FROM `answers` WHERE questionId = ?', [id], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getAllQuestions = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `questions`', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getTop1Question = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `questions` ORDER BY id DESC LIMIT 1', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}


const getQuestionById = async function (id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `questions` WHERE id = ?', [id], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const getTop1AnswerDESC = async function () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `answers` ORDER BY id DESC LIMIT 1', function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const deleteByID = async function (table, id) {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM ${table} WHERE ${id} = id`
        connection.query(sql, function (error, results, fields) {
            if (error) return reject(error);

            resolve(results.affectedRows);
        });
    });
}

const updateByID = async function (table, object) {
    return new Promise((resolve, reject) => {
        let sql;

        if (table === 'courses') {
            sql = `UPDATE ${table} SET name = "${object.name}", descript = "${object.descript}", valid = ${object.valid}, total_time =${object.total_time}  WHERE id = ${object.id}`;
        } else if (table === 'questions') {
            sql = `UPDATE ${table} SET category = "${object.category}", type = ${object.type}, content = "${object.content}", correctId = "${object.newCorrectId}"  WHERE id = ${object.id}`;
        } else {
            sql = `UPDATE ${table} SET content = "${object.content}" WHERE id = ${object.id}`;
        }

        connection.query(sql, function (error, results, fields) {
            if (error) return reject(error);

            resolve(results.affectedRows);
        });
    });
}

const addCourse = async function (object) {
    console.log(object)
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO `courses` (`name`, `descript`, `valid`, `total_time`) VALUES(?, ?, ?, ?)', [object.name, object.descript, object.valid, object.total_time], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const addQuestion = async function (object) {
    console.log(object)
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO `questions` (`category`, `type`, `content`, `correctId`, `courseId`) VALUES(?, ?, ?, ?, ?)', [object.category, object.type, object.content, object.newCorrectId, object.courseId], function (error, results, fields) {
            if (error) return reject(error);

            resolve(results);
        });
    });
}

const addAnswerByQuestionId = async function (answer, questionId) {
    console.log(answer)
    console.log(questionId)
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO `answers` (`content`, `questionId`) VALUES(?, ?)', [answer, questionId], function (error, results, fields) {
            if (error) return reject(error);
            
            resolve(results);
        });
    });
}

module.exports = {
    getAllCourses,
    getAllAnswers,
    getAllQuestions,
    deleteByID,
    getCourseByID,
    updateByID,
    getAnswerByID,
    getQuestionById,
    getAllAnswerByQuestionId,
    getTop1Question,
    addQuestion,
    addAnswerByQuestionId,
    getTop1AnswerDESC,
    getTop1CourseDESC,
    addCourse
};
