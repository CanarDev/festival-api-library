const api = async (parameters: string) => {
    const response =  await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?' + parameters, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    return await response.json()
}

const makeUrlParameters = (parameters: { key: string; value: string }[]) => {
    const urlparam = new URLSearchParams()
    urlparam.append('dataset', 'panorama-des-festivals')
    parameters.forEach((param) => {
        urlparam.append(param.key, param.value)
    })
    return urlparam.toString()
}

export const getFestivals = {

    data: async (parameters: {key: string, value: string}[]) => {
        const UrlParameters = makeUrlParameters(parameters)
        return await api(UrlParameters)
    },

    names: async (parameters: {key: string, value: string}[]) => {
        const UrlParameters = makeUrlParameters(parameters)
        const response = await api(UrlParameters)
        const festivalsNames = response.records.map((record: { fields: { nom_de_la_manifestation: string } }) => record.fields.nom_de_la_manifestation)
        return festivalsNames
    },

    website: async (parameters: {key: string, value: string}[]) => {
        const UrlParameters = makeUrlParameters(parameters)
        const response = await api(UrlParameters)
        const festivalsWebsite = response.records.map((record: { fields: { site_web: string } }) => record.fields.site_web)
        return festivalsWebsite
    },

    cities: async (parameters: {key: string, value: string}[]) => {
        const UrlParameters = makeUrlParameters(parameters)
        const response = await api(UrlParameters)
        const festivalsCities = response.records.map((record: { fields: { commune_principale: string } }) => record.fields.commune_principale)
        return festivalsCities
    },

    averagedBegins: async (parameters: {key: string, value: string}[]) => {
        const UrlParameters = makeUrlParameters(parameters)
        const response = await api(UrlParameters)
        const festivalsAveragedBegins = response.records.map((record: { fields: { mois_habituel_de_debut: string } }) => record.fields.mois_habituel_de_debut)
        return festivalsAveragedBegins
    }
}

export default {
    getFestivals
}