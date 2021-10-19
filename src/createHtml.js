const fs = require('fs');

const makeHtmlPage = function (myTeamInfo) {
    fs.writeFile('./teamPage.html', myTeamInfo, err => {
        if (err) {
            console.error(err)
            return
        }

    })
}