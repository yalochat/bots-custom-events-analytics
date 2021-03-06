'use strict'

const _ = require('lodash');
const Wreck = require('wreck-promise');

const externals = {}
const internals =  {}

externals.init = (botName, appId, pageId) => {

    internals.botName = botName
    internals.appId = appId
    internals.pageId = pageId

    const headers ={ 'content-type': 'application/json' }
    const baseUrl = `https://graph.facebook.com/${appId}/activities`

    internals.wreck = Wreck.defaults({baseUrl, headers})

    internals.formTemplate = {
        event: 'CUSTOM_APP_EVENTS',
        custom_events: '',
        advertiser_tracking_enabled: 0,
        application_tracking_enabled: 0,
        extinfo: JSON.stringify(['mb1']),
        page_id: pageId
    }
}

externals.track = (recipientId, eventString, value)  => {

    //remove query params from event
    const eventName = _.split(eventString,'?',1)[0]
    const customEvent = { _eventName: `${internals.botName} ${_.snakeCase(eventName)}` }

    if (value) {
        customEvent['customValue'] = value
    }

    const payload = _.merge( internals.formTemplate, {
        custom_events: JSON.stringify([customEvent]),
        page_scoped_user_id: recipientId
    })

    return Wreck.post(null, {payload}).catch( err => console.error(err))
}

module.exports = externals
