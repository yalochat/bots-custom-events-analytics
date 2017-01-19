'use strict'

// Load modules

const Lab = require('lab')
const Code = require('code')
const Analytics = require('../lib')

// Test shortcuts

const lab = exports.lab = Lab.script()
const { describe, it } = lab
const expect = Code.expect

describe('track analytic', () => {

    it('track en event', (done) => {
        Analytics.init('fredtest', 1746825388870241, 345741605489510)
        Analytics.track('993939393','goto_dfdf-dfdf-ddd').then(res => {

            expect(res.body.success).to.be.true()
            done()

        }).catch(done)
    })

    it('track en event with query params', (done) => {
        Analytics.init('fredtest', 1746825388870241, 345741605489510)
        Analytics.track('993939393','goto_dfdf-dfdf-ddd?hello-world').then(res => {

            expect(res.body.success).to.be.true()
            done()

        }).catch(done)
    })
})
