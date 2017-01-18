'use strict'

const _ = require('lodash');
const Request = require('request');

const externals = {}

externals.track = (botName, appId, pageId, recipientId, eventName, value)  => {
    const customEvent = { _eventName: _.replace(eventName, '-','_') }

    if (value) {
      customEvent['customValue'] = value
    }

    Request.post({
        url : `https://graph.facebook.com/${appId}/activities`,
        form: {
            event: 'CUSTOM_APP_EVENTS',
            custom_events: JSON.stringify([customEvent]),
            advertiser_tracking_enabled: 0,
            application_tracking_enabled: 0,
            extinfo: JSON.stringify(['mb1']),
            page_id: pageId,
            page_scoped_user_id: recipientId
        }
    }, (err,httpResponse,body) => {
      if (err) {
        console.error(err);
      }
      console.log(httpResponse.statusCode);
      console.log(body);
    }
}

module.exports = externals;
