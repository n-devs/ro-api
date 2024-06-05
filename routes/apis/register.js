const express = require('express');
const connection = require('../../config/db')
const router = express.Router();
const crypto = require('crypto');


function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

/* post users listing. */
router.post('/register', function (req, res, next) {
  connection.query(
    "INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `sex`, `email`, `group_id`, `state`, `unban_time`, `expiration_time`, `logincount`, `lastlogin`, `last_ip`, `birthdate`, `character_slots`, `pincode`, `pincode_change`, `vip_time`, `old_group`, `web_auth_token`, `web_auth_token_enabled`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [null, req.body.userid, hashPassword(req.body.user_pass), req.body.sex, req.body.email,"0","0","0","0","0",null,"",null,"0","","0","0","0",null,"0"],
    function (err, results) {
      res.status(201).json(results);
    }
  );
});

module.exports = router;
