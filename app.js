#!/usr/bin/env node

var Request = require('yow/request');


require('dotenv').config();

class BorsdataAPI {

	constructor() {
		var defaultOptions = {
			debug: true,
			headers: {
				'content-type': 'application/json'
			}
		};

		this.rootUrl = `https://apiservice.borsdata.se/v1`;
		this.apiKey = process.env.API_KEY;
		this.request = new Request(this.rootUrl, defaultOptions);
	}

	async get(path) {
		var query = {
			authKey:this.apiKey
		}
		return this.request.get(path, {query:query});
		return result;

	}
	async getMarkets() {
		return this.get('branches');
	}
}

async function run() {

	try {
		let api = new BorsdataAPI();
		let markets = await api.getMarkets();
		console.log(JSON.stringify(markets, null, "   "));
	
	}
	catch(error) {
		console.log(error);
	}	
}

run();
