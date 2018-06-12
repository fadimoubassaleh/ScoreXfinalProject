import { Cookies } from 'meteor/ostrio:cookies';
import { Meteor } from 'meteor/meteor';

const cookies = new Cookies();
console.log('API runs')

if (Meteor.isClient) {
    console.log(cookies.keys())
    console.log(cookies.get('run-game'))
    console.log(cookies.get('old-game'))
}

Meteor.methods({
    // 'game.run.save'(result) {
    //     cookies.set('run-game', JSON.stringify(result), { maxAge: 86400 })
    // },
    // 'game.end.save'(allGameResult) {
    //     cookies.set('old-game', allGameResult, { maxAge: 31536e3 })
    //     cookies.remove('run-game')
    // },
    // 'game.end.check': function (err, result) {
    //     setTimeout(() => {
    //         const oldGame = cookies.has('old-game')
    //         console.log('API check')
    //         console.log("API" + oldGame)
    //         if (err) {
    //             console.log("API" + err)
    //         }
    //         if (oldGame) {
    //             console.log('API check it"s true')
    //             console.log("API" + oldGame)
    //             return true
    //         } else {
    //             return false
    //         }
    //     }, 1000);
    // }
})

if (Meteor.isServer) {
}