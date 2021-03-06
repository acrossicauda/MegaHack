const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        console.log(ongs);

        return response.json(ongs);
    },

    async create(request, response) {
         //const params = request.query;
        //const params = request.params;
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        try {
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        } catch(e) {
            console.log(e);
        }

        return response.json({ id });
    }
};