// 
//
//

const hatebuCountEndpoint = "http://api.b.st-hatena.com/entry.count"

module.exports = (robot) => {
    robot.respond(/hatebu count (.+)$/i, (msg) => {
        const target = encodeURI(msg.match[1])
        const req    = robot.http(hatebuCountEndpoint + "?url=" + target).get()
        req((err, res, body) => {
            err && robot.logger.error(err);
            msg.send(body)
        });
    });
};
