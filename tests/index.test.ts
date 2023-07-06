// make me a test for the index.ts file
import { assert } from 'chai';
import {it, describe} from "node:test";
import {getFestivals} from "../index";

describe('getAllFestivals functions', () => {
    it('should return data responses', async () => {
        const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]
        const festivalsResponse = getFestivals.data(parameters)
        const festivals = await festivalsResponse
        assert.ok(festivals.records.length === 20)
    })

    it('should return festivals names', async () => {
        const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]
        const festivalsNamesResponse = getFestivals.names(parameters)
        const festivalsNames = await festivalsNamesResponse
        assert.ok(festivalsNames.length === 20)
    })

    it('should return festivals cities', async () => {
        const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]
        const festivalsCitiesResponse = getFestivals.cities(parameters)
        const festivalsCities = await festivalsCitiesResponse
        assert.ok(festivalsCities.length === 20)
    })

    it('should return festivals website', async () => {
        const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]
        const festivalsWebsiteResponse = getFestivals.website(parameters)
        const festivalsWebsite = await festivalsWebsiteResponse
        assert.ok(festivalsWebsite.length === 20)
    })

    it('should return festivals averaged begins', async () => {
        const parameters = [{key: 'rows', value: '20'}, {key: 'lang', value: 'FR'}]
        const festivalsAveragedBeginsResponse = getFestivals.averagedBegins(parameters)
        const festivalsAveragedBegins = await festivalsAveragedBeginsResponse
        assert.ok(festivalsAveragedBegins.length === 20)
    })
})