function monitor(start, tag) {

    if(start) {
        const endTime = process.hrtime(start);
        const duration = parseInt((endTime[0] * 1000) + (endTime[1] / 1000000));
        console(`Duration for ${tag}: ${duration}`);
    } else {
        return process.hrtime();
    }
}

module.exports = monitor;