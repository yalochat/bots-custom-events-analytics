'use strict'

// Load modules

const Http = require('http')
const Lab = require('lab')
const Code = require('code')
const Analytics = require('../lib')

// Test shortcuts

const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = Code.expect


const internals = {}

describe('track analytic', () => {

    it('track en event', (done) => {
        Analytics.init('fredtest', 1746825388870241, 345741605489510)
        Analytics.track('993939393','goto_dfdf-dfdf-ddd').then(res => {

            expect(res.body.success).to.be.equals('')
        }).catch(done)
    })

    it('track en event with query params', (done) => {
        Analytics.init('fredtest', 1746825388870241, 345741605489510)
        Analytics.track('993939393','goto_dfdf-dfdf-ddd?hello-world').then(res => {

            expect(res.body.success).to.be.equals('')
        }).catch(done)
    })
})
